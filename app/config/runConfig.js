app.run(['$rootScope', 'loginService', '$location', 'dataService',  
        async function($rootScope, loginService, $location, dataService) {
    //console.clear();
    console.log('app is running ...');

    $rootScope.$on('$routeChangeStart', function() {
        if(!$rootScope.currentUser && !loginService.isAuthenticated()){
           $location.url("/login");
        }
    });    

    
}])