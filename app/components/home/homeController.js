app.controller("homeController", 
    ["$scope", "dataService", "$location", 
    function($scope, dataService, $location) { 
        angular.element(document).ready(function() {
            dataService.getData();
        });                  
        
        $scope.goToDetail = function(title) {  
            console.log(title)         
            $location.url('/detail/'+title);
        } 

        $scope.fillRatingIcon = function(event) {
            
            let iconsContainer = event.target.parentElement;
            let icons = iconsContainer.children;
            let index = -1;
            for(i=0; i<icons.length;i++) {
                // id: ng339
                if(icons[i].ng339==event.target.ng339){
                    index = i;
                    break;
                }
            }
            for(i=0; i<=index;i++) {
                icons[i].classList.remove('far');
                icons[i].classList.add('fas');
            }
            
        }

        $scope.emptyRatingIcon = function(event) {
            let icon = event.target;
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        }

        $scope.emptyAllRatingIcon = function(event) {
            let iconsContainer = event.target.parentElement;
            let icons = iconsContainer.children;
            for(i=0; i<icons.length;i++) {
                icons[i].classList.remove('fas');
                icons[i].classList.add('far');
            }
        }

        $scope.calcRating = function(title, event) {
            let iconsContainer = event.target.parentElement;
            let icons = iconsContainer.children;
            let count = 1;
            for(i=0; i<icons.length;i++) {
                // id: ng339
                if(icons[i].ng339==event.target.ng339){
                    count += i;
                    break;
                }
            }
            console.log('voto: '+count)
            return count;
        }
    }
]);