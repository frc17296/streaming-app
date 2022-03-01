app.service('userService', ['$rootScope', function($rootScope) {
    this.users = [{
        id:1,
        nickname: 'Test',
        email: 'test@gmail.com',
        password: '1234',
        favorites: [
            {
                title: "Howl's moving castle"
            },
            {
                title: "Porco rosso"
            }
        ]
    }];

    this.getUser = function(credentials) {
        return this.users.find(u => u.email === credentials.email)
    }

    this.addFavorite = function(title) {
        if(title!=undefined && title!="") {
            let credentials = {
                email: $rootScope.currentUser.email,
                password: $rootScope.currentUser.password
            }
            let user = this.getUser(credentials);
            if(user) {
                user.favorites.push(title);
            }
        }
    }
}])