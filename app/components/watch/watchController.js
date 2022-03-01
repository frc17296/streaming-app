app.controller('watchController', ['$scope', '$routeParams', 'filmService', function($scope, $routeParams, filmService) {
    $scope.filmTitle = $routeParams.title;    
    $scope.filmSrc = filmService.getFilmSrc($scope.filmTitle);
}])