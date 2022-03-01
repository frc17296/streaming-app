app.controller('loginController', [ '$scope', 'loginService', '$location', function($scope, loginService, $location) {
    $scope.wrongCredentials;
    $scope.errorMsg = "Email o password errati, riprova!"
    $scope.formLoginInputs = {email: '', password: ''};
    $scope.keepSigned;
    $scope.login = function() {
        var keepSigned = $scope.keepSigned;
        loginForm.reset();
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
    }
}])