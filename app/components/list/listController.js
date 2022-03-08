app.controller('listaController', ['$scope', '$rootScope', function($scope, $rootScope) {
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
}])