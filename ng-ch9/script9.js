angular.module('myApp',[])
.controller('EquationCtrl',function($scope){
	$scope.equation = {};
	$scope.change = function(){
		$scope.equation.output = Number($scope.equation.x)+2;
	};
});