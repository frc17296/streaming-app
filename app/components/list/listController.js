app.controller('listController', ['$scope', '$location', function($scope, $location) {
    angular.element(document).ready(function() {
        const playBtnsObj = angular.element(document.querySelectorAll('.play-btn'));
        const playBtns = Object.values(playBtnsObj);
        playBtns.pop();
        playBtns.forEach(b => {
            b.onmouseenter = () => {
                b.children[0].style.visibility = 'visible';
            }

            b.onmouseleave = () => {
                b.children[0].style.visibility = 'hidden';
            }
        })
    }); 

    $scope.goToDetail = function(title) {                  
        $location.url('/detail/'+title);
    } 
}]);