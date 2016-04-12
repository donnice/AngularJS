angular.module('myApp',[])
.controller('Ctrl1',function($window,$scope){
	$scope.name = 'World';
	$scope.greet = function(){
		($window.mockWindow || $window).alert('Hello '+$scope.name);
	}
})