app.controller('carouselCtrl', function() {
  this.movement;
  this.sliderMargin = 40;
  angular.element(document).ready(function() {    
    const sliderObj = angular.element(document.querySelectorAll('.slider')); 
    const sliders = Object.values(sliderObj);
    // Object.values create an extra el so i need to pop it
    sliders.pop();

    // slider
    sliders.forEach(slider => {
      const carousel = slider.parentNode;
      const itemsObj = angular.element(slider.querySelectorAll('.item'));  
      const items =  Object.values(itemsObj);
      items.pop();
      const slideLeftBtn = angular.element(carousel.querySelector('.left'));  
      const slideRightBtn = angular.element(carousel.querySelector('.right')); 

      
      let measures;
      carousel.onmouseenter = () => {
        measures = this.calcSliderMeasures(slider, items);
        toggleBtnVisibility(measures, slideLeftBtn[0], slideRightBtn[0]);
      }

      carousel.onmouseleave = () => {
        slideLeftBtn[0].style.display = 'none';
        slideRightBtn[0].style.display = 'none';
      }

      slideLeftBtn[0].onclick = () => {
        measures = this.calcSliderMeasures(slider, items);
        if(this.canScroll(measures, 'left')) {
          slider.style.transform = `translate(${this.calcTranslation('right', slider)}px)`; 
          setInterval(() => {
            measures = this.calcSliderMeasures(slider, items);
            toggleBtnVisibility(measures, slideLeftBtn[0], slideRightBtn[0]);
          }, 100);
        }
      };
      slideRightBtn[0].onclick = () => {
        measures = this.calcSliderMeasures(slider, items);
        if(this.canScroll(measures, 'right')) {
          slider.style.transform = `translate(${this.calcTranslation('left', slider)}px)`; 
          setInterval(() => {
            measures = this.calcSliderMeasures(slider, items);
            toggleBtnVisibility(measures, slideLeftBtn[0], slideRightBtn[0]);
          }, 100);
        }
      };
    });
  });  

  toggleBtnVisibility = (measures, slideLeftBtn, slideRightBtn) => {
    if(canScroll(measures, 'left')) {
      slideLeftBtn.style.display = 'block';
    } else {
      slideLeftBtn.style.display = 'none';
    } 

    if(canScroll(measures, 'right')) {
      slideRightBtn.style.display = 'block';
    } else {
      slideRightBtn.style.display = 'none';
    }
  }

  canScroll = (measures, direction) => {
    let xOffset = measures.xOffset > 0 ? measures.xOffset : measures.xOffset * (-1);        

    switch(direction) {
      case 'left': {   
        if(measures.xOffset >= 40) {
          return false;
        }
        if((xOffset - this.movement) < 0) {
          this.movement = (xOffset + 40);
          return true;
        }
        return (measures.xOffset + this.movement) <= 40;
      }
      case 'right': {
        let diff = (measures.maxXOffset - xOffset - this.sliderMargin);
        if( diff < this.movement && diff > 0) {
          this.movement = diff;
        } else if (diff < this.movement && diff < 0) {
          this.movement = measures.maxXOffset;
        }
        return (diff) > 0;
      }
    }
  }

  calcSliderMeasures = (slider, items) => {
    // visible area of the slider
    const sliderVisibleWidth = slider.offsetWidth;    
    this.movement = sliderVisibleWidth;

    // total width of all items    
    const { left } = items[0].getBoundingClientRect();
    const { right } = items[items.length - 1].getBoundingClientRect();
    const totalItemsWidth = right - left;
    
    // maximum distance carousel should be allowed to scroll
    const maxXOffset = (totalItemsWidth - sliderVisibleWidth);

    // while difference between the actual x position and the max allowed movement is greater then 0
    // i can move
    //return ((slider.getBoundingClientRect().x - minXOffset) > 0);
    return {
      xOffset: slider.getBoundingClientRect().x,
      maxXOffset : maxXOffset 
    }
  };

  leftMove = (transform) => {
    let splitted = transform.split("(-");
    if(splitted.length>1) { 
      splitted = splitted[1].split("px)");
      let value = splitted[0];
      return "-" + (Number(value) + this.movement);
    } else {
      splitted = transform.split("(");
      splitted = splitted[1].split("px)");
      let value = splitted[0];
      value = Number(value) - this.movement;
      return value < 0 ? value : String(- value);
    }
  };

  rightMove = (transform) => {
    let splitted;
    splitted = transform.split("(-");
    if(splitted.length>1) {
      splitted = splitted[1].split("px)");
      let value = splitted[0];        
      value = Number(value) - this.movement;
      return value > 0 ? "-" + value : String(-value);
    } else {
      splitted = transform.split("(");
      splitted = splitted[1].split("px)");
      let value = splitted[0];
      return String(Number(value) + this.movement);
    }
  };

  calcTranslation = (direction, slider) => {
    if(slider.style.transform) {
      let transform = slider.style.transform;
      let value;
      switch(direction) {
        case 'left': {
          value = leftMove(transform); 
          return value;
        }
        case 'right': {
          value = rightMove(transform);
          return value;
        }
      }        
    } else if(direction === 'left') {
      return "-" + this.movement;
    } else {
      return this.movement;
    }      
  };
    
});
