(function(angular){
	'use strict';
angular.module('ngRouteExample',['ngRoute'])
.controller('MainController',function($scope,$route,$routeParams,$location){
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
})
.controller('BookController',function($scope,$routeParams){
	$scope.name = "BookController";
	$scope.params = $routeParams;
})
.controller('ChapterController',function($scope,$routeParams){
	$scope.name = "ChapterController";
	$scope.params = $routeParams;
})
.config(function($routeProvider,$locationProvider){
	$routeProvider
		.when('/Book/:bookId',{
			templateUrl:'book.html',
			controller:'BookController',
			resolve:{
				delay:function($q,$timeout){//1s delay
					var delay = $q.defer();
					$timeout(delay.resolve,1000);
				}
			}
		})
})

})