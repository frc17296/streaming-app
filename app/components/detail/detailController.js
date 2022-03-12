app.controller('detailController', ['$scope', '$routeParams', 'dataService', 'userService',
                function($scope, $routeParams, dataService, userService) {
    $scope.filmTitle = $routeParams.title;   
    $scope.film = dataService.getFilmByTitle($scope.filmTitle);
    $scope.isFav = () => {
        return userService.isFavorites($scope.film);
    }
    $scope.addToFav = () => {
        userService.addFavorite($scope.film);
    };

    angular.element(document).ready(function() {
        const background = angular.element(document.querySelector('.background'));
        background[0].style.backgroundImage = `linear-gradient(90deg,#0f171e 10%,rgba(15,23,30,.8) 60%,rgba(15,23,30,0)), url(${$scope.film.imageurl[0]})`;
    }); 
}])