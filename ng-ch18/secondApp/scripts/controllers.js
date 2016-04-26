angular.module('myApp',[])
.controller('MainController',function($scope){
	$scope.signedIn = function(oauth){
		$scope.user = oauth;
	}
});