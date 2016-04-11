angular.module('shitApp',[])
.controller('Ctrl1',function($scope){
	$scope.name = 'angular';
});

describe('hoho',function(){
	beforeEach(module('shitApp'));
	var $scope = {};
	it('should show off bindings', function() {
	  expect($scope.name.text()).toBe('angular');
	});
});