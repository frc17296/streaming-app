app.service('loginService', ['$rootScope', '$location', 'userService',  function($rootScope, $location, userService) {

    this.isAuthenticated = function() {
        var credentials = localStorage.getItem("user");
        if(credentials) {
            let user = userService.getUser(JSON.parse(credentials))
            this.setCurrentUser(user);
            return true;
        }
    };

    this.login = function(inputs) {
        let user = userService.getUser(inputs);        
        if(user) {
            if(user.password === inputs.password) { 
                this.isAuthenticated = true;               
                return user;
            }
        }
    }

    this.logout = function() {
        console.log('loggin out ...')
        this.clearCurrentUser();
        localStorage.removeItem("user");
        $location.url('/login');
    }

    this.setCurrentUser = function(user) {
        $rootScope.currentUser = user;
    }  

    this.clearCurrentUser = function() {
        $rootScope.currentUser = undefined;
    }
    
    this.rememberUser = function(email, password) {
        let loggedUser = {
            email: email,
            password: password
        }        
        localStorage.setItem("user", JSON.stringify(loggedUser));
        console.log(JSON.stringify(loggedUser));
    }
}])