app.controller('detailController', ['$scope', '$routeParams', 'dataService',
                function($scope, $routeParams, dataService) {
    $scope.filmTitle = $routeParams.title;   
    $scope.film = dataService.getFilmByTitle($scope.filmTitle);
    
    

    angular.element(document).ready(function() {
        const background = angular.element(document.querySelector('.background'));
        background[0].style.backgroundImage = `linear-gradient(90deg,#0f171e 10%,rgba(15,23,30,.8) 60%,rgba(15,23,30,0)), url(${$scope.film.imageurl[0]})`;
        
        const iconCnt = angular.element(document.querySelector('.icon-cnt'));
        const checkSvg = angular.element(document.querySelector('#is-fav'));
        const removeSvg = angular.element(document.querySelector('#rem-fav'));
        const addSvg = angular.element(document.querySelector('#add-fav'));

        $scope.addToFav = () => {
            checkSvg[0].classList.remove('hide');
            checkSvg[0].classList.add('show');
            addSvg[0].classList.add('hide');
        };
    
        $scope.remFromFav = () => { 
            removeSvg[0].classList.remove('show');
            removeSvg[0].classList.add('hide');
            addSvg[0].classList.add('show');
        }

        $scope.isFav = () => {
            return checkSvg[0].classList.value.includes('show');
        }

        iconCnt[0].onmouseenter = () => {
            if($scope.isFav()) {   
                checkSvg[0].classList.add('hide');
                checkSvg[0].classList.remove('show');
                removeSvg[0].classList.add('show');
                removeSvg[0].classList.remove('hide');
            }
        };
        iconCnt[0].onmouseleave = () => {
            if($scope.isFav()) {   
                checkSvg[0].classList.remove('hide');
                checkSvg[0].classList.add('show');
                removeSvg[0].classList.remove('show');
                removeSvg[0].classList.add('hide');
            }
        }
        
    }); 
}])