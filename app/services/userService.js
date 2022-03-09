app.service('userService', ['$rootScope', function($rootScope) {
    this.users = [{
        id:1,
        nickname: 'User',
        email: 'test@test.com',
        password: '1234',
        favorites: []
    }];

    this.getUser = function(credentials) {
        return this.users.find(u => u.email === credentials.email)
    }

    this.addFavorite = function(film) {
        if(film) {
            let credentials = {
                email: $rootScope.currentUser.email,
                password: $rootScope.currentUser.password
            }
            let user = this.getUser(credentials);
            if(user && !user.favorites.find(f => f.title === film.title)) {
                user.favorites.push(film);
            }
        }
    }
}])