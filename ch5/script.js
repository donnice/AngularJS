angular.module('shitApp',[])
.controller('Ctrl1',function($scope){
	$scope.name = 'angular';
});

describe('hoho',function(){
	beforeEach(module('shitApp'));
	it('should show off bindings', function() {
      var element = angular.element('div[ng-controller="Ctrl1"] span[ng-bind]');
	  expect(element.text()).toBe('angulashitr');
	});
});