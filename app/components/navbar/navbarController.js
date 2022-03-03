app.controller('navbarController', ['$scope', '$rootScope', 'loginService', function($scope, $rootScope, loginService) {
    $scope.appTitle = "Streaming app";
    $scope.currentUser = $rootScope.currentUser;
    $scope.searchFunction = function(value) {
        $rootScope.searchInput = value;
    }

    $scope.handleSubmit = function() {
        searchForm.reset();
    }

    $scope.logout = function() {
        loginService.logout();
    }

    $scope.toggleSearchInput = function() {
        let input = document.getElementById('searchInput');
        input.classList.toggle('show');
        input.parentElement.classList.toggle('search');
    }
}]);
