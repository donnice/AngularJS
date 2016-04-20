angular.module('myApp',[])
.controller('SomeCtrl',function($scope){

})
.controller('SecondCtrl',function($scope){

})
.directive('myDirective',function(){
	return{
		restrict:'A',
		scope:true
	}
})