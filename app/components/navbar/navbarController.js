app.controller('navbarController', ['$scope', '$location',
                function($scope, $location) {

    $scope.appTitle = "Streaming app";    

    $scope.toggleSearchInput = () => {
        
        let input;
        if(!isDesktop()) {
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
        $scope.searchInput = value;
    };

    $scope.handleSubmit = function() {
        $location.url('/search/'+$scope.searchInput);
        searchForm.reset();
        searchFormMobile.reset();
        $scope.toggleSearchInput();
    };
}]);
