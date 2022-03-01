app.run(['$rootScope', 'loginService', '$location',  function($rootScope, loginService, $location) {
    console.clear();
    console.log('app is running ...');

    $rootScope.$on('$routeChangeStart', function() {
        if(!$rootScope.currentUser && !loginService.isAuthenticated()){
           $location.url("/login");
        }
    });
}])