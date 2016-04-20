angular.module('myApp',[])
.controller('SomeCtrl',function($scope){
	$scope.someBareValue = "Failure";
	$scope.someModel = {
		someValue:'Will success'
	};
	$scope.someAction = function(){
		$scope.someModel.someValue = 'Changed!Yah!';
		$scope.someBareValue = 'Changed!So?';
	};
})
.controller('ChildCtrl',function($scope){
	$scope.childAction = function(){
		$scope.someModel.someValue = 'Success!';
		$scope.someBareValue = 'Failed...';
	};
});