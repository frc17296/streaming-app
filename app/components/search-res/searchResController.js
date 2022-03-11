app.controller('searchResController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.searchInput = $routeParams.input;
}]);