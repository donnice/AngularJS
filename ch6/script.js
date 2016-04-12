angular.module('myApp',[])
.controller('Ctrl2',function($scope){
	$scope.exprs = [];
	$scope.expr = '3*10|currency';
	$scope.addExp = function(expr){
		$scope.exprs.push(expr);
	};

	$scope.removeExp = function(index){
		$scope.exprs.splice(index,1);
	};
});