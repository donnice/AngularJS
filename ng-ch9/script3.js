angular.module('myApp',[])
.run(function($rootScope,$timeout){
	$timeout(function(){
		$rootScope.myHref = 'http://www.google.com';
	},1000);
})