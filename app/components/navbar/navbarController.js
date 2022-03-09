app.controller('navbarController', ['$scope', '$rootScope', 'loginService', function($scope, $rootScope, loginService) {
    $scope.appTitle = "Streaming app";
    $scope.currentUser = $rootScope.currentUser;
    $scope.toggleSearchInput = () => {
        const winWidth = window.innerWidth;
        let input;
        if(winWidth < 700) {
            let searchModal = angular.element(document.querySelector('.searchModal'))[0];
            let modalStyle = searchModal.style;
            modalStyle.visibility = modalStyle.visibility == 'hidden' ? 'visible' : 'hidden';
            input = angular.element(document.getElementById('searchInputModal'))[0];
        } else {
            input = angular.element(document.getElementById('searchInput'))[0];
            input.classList.toggle('show');
            input.parentElement.classList.toggle('search');
        }
        input.focus();
    };

    $scope.closeInputModal = () => {
        angular.element(document.querySelector('.searchModal'))[0].style.visibility = 'hidden';
    };

    $scope.searchFunction = function(value) {
        $rootScope.searchInput = value;
    };

    $scope.handleSubmit = function() {
        searchForm.reset();
        searchFormMobile.reset();
        $scope.toggleSearchInput();
    };

    $scope.logout = function() {
        loginService.logout();
    };
}]);
