app.controller("homeController", ["$scope", "dataService", "filmService", "$location", "userService",
    function($scope, dataService, filmService, $location, userService){
        $scope.title = "Studio Gibli Films";  
        this.getFilms = dataService.data.then(data => {
            $scope.films = data
        });
            
        $scope.watch = function(title) {
            let source = filmService.getFilmSrc(title);
            if(source) {            
                $location.url('/watch/'+title);
            }
        }

        $scope.addFavorite = function(title) {
            console.log('adding : ' + title + ' to favorite')
            let titleWrapper = {
                title: title
            }
            userService.addFavorite(titleWrapper);
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