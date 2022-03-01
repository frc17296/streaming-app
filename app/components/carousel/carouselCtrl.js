app.controller('carouselCtrl', ['dataService', '$scope', function(dataService, $scope) {
  this.$onInit = () => {    
    dataService.data.then(data => {
      $scope.films = data;
    });
  }

  angular.element(document).ready(function() {
    const slider = angular.element(document.querySelector('.slider'));   
    const slideLeftBtn = angular.element(document.querySelector('#left'));  
    const slideRightBtn = angular.element(document.querySelector('#right'));      
    const movement = 20;

    slideLeftBtn[0].onclick = () => {
      slider[0].style.transform = `translate(${this.calcTranslation('left')}px)`;       
    }

    slideRightBtn[0].onclick = () => {
      slider[0].style.transform = `translate(${this.calcTranslation('right')}px)`;       
    }

    calcTranslation = (direction) => {
      if(slider[0].style.transform) {
        console.log('primo if')
        let transform = slider[0].style.transform;
        let value;
        console.log('direction: '+ direction)
        switch(direction) {
          case 'left': {
            value = this.leftMove(transform);            
            return value;
          }
          case 'right': {
            value = this.rightMove(transform);
            return value;
          }
        }        
      } else if(direction === 'left') {
        return "-" + movement;
      } else {
        return "+" + movement;
      }      
    }

    leftMove = (transform) => {
      let splitted;
      splitted = transform.split("(-");
      if(splitted.length>1) { 
        splitted = splitted[1].split("px)");
        let value = splitted[0];
        return "-" + (Number(value) + movement);
      } else {
        splitted = transform.split("(");
        splitted = splitted[1].split("px)");
        let value = splitted[0];
        value = Number(value) - movement;
        return value > 0 ? "+" + value : String(value);
      }
    }

    rightMove = (transform) => {
      let splitted;
      splitted = transform.split("(-");
      if(splitted.length>1) { 
        console.log(splitted)
        splitted = splitted[1].split("px)");
        let value = splitted[0];        
        value = Number(value) - movement;
        console.log( value > 0 ? "-" + value : String(-value))
        return value > 0 ? "-" + value : String(-value);
      } else {
        splitted = transform.split("(");
        splitted = splitted[1].split("px)");
        let value = splitted[0];
        return String(Number(value) + movement);
      }
    }
  });

  getTotalItemsWidth = (items) => {
    const { left } = items[0].getBoundingClientRect();
    const { right } = items[items.length - 1].getBoundingClientRect();
    return right - left;
  }
    
}]);
