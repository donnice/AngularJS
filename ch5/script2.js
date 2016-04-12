angular.module('time',[])
.controller('Ctrl2',function($scope){
	$scope.format = 'M/d/yy h:mm:ss a';
})
.directive('myCurrentTime',function($timeout,dateFilter){
	return function(scope,element,attrs){
		var format,timeoutId;
		
		function updateTime(){
			element.text(dateFilter(new Date(), format));
		}

		scope.$watch(attrs.myCurrentTime,function(value){
			format = value;
			updateTime();
		});

		function updateLater(){
			timeoutId = $timeout(function(){
				updateTime();
				updateLater();
			},1000);
		}

		element.bind('$destroy',function(){
			$timeout.cancel(timeoutId);
		});

		updateLater();
	}
});