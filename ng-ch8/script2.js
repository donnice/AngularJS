angular.module('myApp',[])
.run(function($rootScope){
	$rootScope.rootProperty = 'root scope';
})
.controller('ParentCtrl',function($scope){
	$scope.parentProperty = 'parent scope';
})
.controller('ChildCtrl',function($scope){
	$scope.childProperty = 'child scope';
	$scope.fullSentenceFromChild = 'Same $scope: we can access: '+
									$scope.rootProperty+' and '+
									$scope.parentProperty+' and '+
									$scope.childProperty
});