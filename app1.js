angular.module('notesApp',[])
.controller('MainCtrl',function($scope){
	$scope.tab = 'first';
	$scope.open = function(tab){
		$scope.tab = tab;
	};
})
.controller('SubCtrl',function($scope){
	$scope.list = [
	{id:1, label:'Item 0'},
	{id:2, label:"Item 1"}
	];

	$scope.add = function(){
		$scope.list.push({
			id:$scope.list.length+1,
			label:'Item '+$scope.list.length
		});
	};
});