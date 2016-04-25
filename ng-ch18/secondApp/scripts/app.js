angular.module('myApp',[
	'ngRoute',
	'myApp.services',
	'myApp.directives'])
.config(function($routeProvider){
	$routeProvider
		.when('/',{
			controller:'MainController',
			templateUrl:'templates/main.html'
		})
		.otherwise({
			redirectTo:'/'
		});
});

window.onLoadCallBack = function(){
	angular.element(document).ready(function(){
		gapi.client.load('outh2','v2',function(){
			angular.bootstrap(document,['myApp']);
		});
	});
}