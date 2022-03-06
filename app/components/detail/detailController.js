app.controller('detailController', ['$scope', '$routeParams', 'filmService', function($scope, $routeParams, filmService) {
    $scope.filmTitle = $routeParams.title;    
    $scope.filmSrc = filmService.getFilmSrc($scope.filmTitle);
    console.log($routeParams)
}])