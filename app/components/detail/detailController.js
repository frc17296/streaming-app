app.controller('detailController', ['$scope', '$routeParams', 'dataService', 'userService',
                function($scope, $routeParams, dataService, userService) {
    $scope.filmTitle = $routeParams.title;   
    $scope.film = dataService.getFilmByTitle($scope.filmTitle);
    $scope.addToFav = () => {
        userService.addFavorite($scope.film);
    }

    angular.element(document).ready(function() {
        const detailCnt = angular.element(document.querySelector('.detail'));
        detailCnt[0].style.backgroundImage = `linear-gradient(90deg,#0f171e 10%,rgba(15,23,30,.8) 40%,rgba(15,23,30,0)), url(${$scope.film.imageurl[0]})`;
    }); 
}])