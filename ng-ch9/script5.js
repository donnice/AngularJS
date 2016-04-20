angular.module('myApp',[])
.controller('SomeCtrl',function($scope){
	$scope.someProperty = 'Hello World!';
	$scope.someAction = function(){
		$scope.someProperty = 'Hello Yunye!';
	}
});