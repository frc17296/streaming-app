app.controller('carouselCtrl', ['dataService', '$scope', '$rootScope', function() {
  this.movement;
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

      const canScroll = this.canSliderScroll(slider, items);      
      slideLeftBtn[0].onclick = () => {
        if(canScroll) {
          slider.style.transform = `translate(${this.calcTranslation('left', slider)}px)`;       
        }
      };
      slideRightBtn[0].onclick = () => {
        if(canScroll) {
          slider.style.transform = `translate(${this.calcTranslation('right', slider)}px)`;       
        }
      };
    });
  });  

  canSliderScroll = (slider, items) => {
    // visible area of the slider
    const sliderVisibleWidth = slider.offsetWidth;
    this.movement = sliderVisibleWidth;

    // total width of all items    
    const { left } = items[0].getBoundingClientRect();
    const { right } = items[items.length - 1].getBoundingClientRect();
    const totalItemsWidth = right - left;
    
    // maximum distance carousel should be allowed to scroll
    const minXOffset = - (totalItemsWidth - sliderVisibleWidth);

    // while difference between the actual x position and the max allowed movement is greater then 0
    // i can move
    return ((slider.getBoundingClientRect().x - minXOffset) > 0);
  };

  leftMove = (transform) => {
    let splitted;
    splitted = transform.split("(-");
    if(splitted.length>1) { 
      splitted = splitted[1].split("px)");
      let value = splitted[0];
      return "-" + (Number(value) + this.movement);
    } else {
      splitted = transform.split("(");
      splitted = splitted[1].split("px)");
      let value = splitted[0];
      value = Number(value) - this.movement;
      return value > 0 ? "+" + value : String(value);
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
      return "+" + this.movement;
    }      
  };
    
}]);
