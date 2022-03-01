app.config(function($routeProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl: 'app/components/home/home.component.html',
			controller: 'homeController'
		})
		.when('/login', {
			templateUrl: 'app/components/login/login.component.html',
			controller: 'loginController'
		})
		.when('/watch/:title', {
			templateUrl: 'app/components/watch/watch.component.html',
			controller: 'watchController'
		})
		.when('/list', {
			templateUrl: 'app/components/list/list.component.html',
			controller: 'listaController'
		})
		.otherwise({
			redirectTo: '/'
		});
});