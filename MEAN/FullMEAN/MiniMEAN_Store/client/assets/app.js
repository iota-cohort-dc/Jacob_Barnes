var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
  .when('/', { templateUrl: 'partials/dashboard.html'})
	.when('/customers', {templateUrl:'partials/customers.html'})
	.when('/orders', {templateUrl:'partials/orders.html'})
  .when('/products', {templateUrl:'partials/products.html'})
  .otherwise({
    redirectTo: '/'
  });
});
