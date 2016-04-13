var app = angular.module('myApp',[]);
app.factory('greeter',function($window){
	return function(text){
		$window.alert(text);
	};
})
.controller('myCtrl',function($scope,greeter){
	$scope.sayHello = function(){
		greeter('Hello Shujiep!');
	};
});

//.$inject = ['$scope', 'dep2'];