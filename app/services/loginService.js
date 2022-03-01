app.service('loginService', ['$rootScope', '$cookieStore', '$location', 'userService',  function($rootScope, $cookieStore, $location, userService) {
    const users = [{
        id:1,
        nickname: 'Test',
        email: 'test@gmail.com',
        password: '1234',
        list: [
            {
                title: "Howl's moving castle"
            },
            {
                title: "Porco rosso"
            }
        ]
    }];

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
        this.clearCookie();
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
        $cookieStore.put('loggedUser', loggedUser);
        localStorage.setItem("user", JSON.stringify(loggedUser));
        console.log(JSON.stringify(loggedUser));
    }

    this.clearCookie = function() {
        $cookieStore.remove('loggedUser');
    }
}])