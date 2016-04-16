angular.module('MyServiceModule',[])
.factory('notify',function($window){
	return function(msg){
		$window.alert(msg);
	};
})
.controller('myController',function($scope,notifyService){
	$scope.callNotify = function(msg){
		notifyService(msg);
	};
})
.$inject = ['$scope','notify'];
