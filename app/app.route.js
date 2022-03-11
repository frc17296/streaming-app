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
		.when('/detail/:title', {
			templateUrl: 'app/components/detail/detail.component.html',
			controller: 'detailController'
		})
		.when('/list', {
			templateUrl: 'app/components/list/list.component.html',
			controller: 'listController'
		})
		.when('/search/:input', {
			templateUrl: 'app/components/search-res/search-res.component.html',
			controller: 'searchResController'
		})
		.otherwise({
			redirectTo: '/'
		});
});