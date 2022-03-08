app.controller('loginController', [ '$scope', 'loginService', '$location', function($scope, loginService, $location) {
    $scope.wrongCredentials;
    $scope.errorMsg = "Email o password errati, riprova!"
    $scope.formLoginInputs = {email: 'test@test.com', password: '1234'};
    $scope.keepSigned;
    $scope.login = function() {
        var keepSigned = $scope.keepSigned;        
        let user = loginService.login($scope.formLoginInputs);
        if(user) {
            $scope.wrongCredentials = false;
            loginService.setCurrentUser(user);
            if(keepSigned) {
                loginService.rememberUser(user.email, user.password);
            }
            $location.url('/');
        }
        else {
            $scope.wrongCredentials = true
        }
        loginForm.reset();
    }
}])