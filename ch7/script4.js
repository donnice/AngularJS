var INTEGER_REGEXP = /^\-?\d*$/;
var FLOAT_REGXP = /^\-?\d+((\.|\,)\d+)?$/;

angular.module('myApp',[])
.directive('integer',function(){
	return{
		require:'ngModel',
		link:function(scope,elm,attrs,ctrl){
			ctrl.$parsers.unshift(function(viewValue){
				if(INTEGER_REGEXP.test(viewValue)){
					ctrl.$setValidity('integer',true);
					return viewValue;
				} else {
					ctrl.$setValidity('integer',false);
					return undefined;
				}
			});
		}
	};
})
.directive('smartFloat',function(){
	return{
		require:'ngModel',
		link:function(scope,elm,attrs,ctrl){
			ctrl.$parsers.unshift(function(viewValue){
				if(FLOAT_REGXP.test(viewValue)){
					ctrl.$setValidity('float',true);
					return viewValue;
				} else {
					ctrl.$setValidity('float',false);
					return undefined;
				}
			})
		}
	}
})
.controller('Controller',function($scope){

});