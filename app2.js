angular.module('notesApp',[])
.controller('MainCtrl',function($scope){
	$scope.tab = 'first';
	$scope.open = function(tab){
		$scope.tab = tab
	};
})
.controller('SubCtrl',function($scope,$ItemService){
	$scope.list = function(){
		return $ItemService.list();
	};

	$scope.add = function(){
		$ItemService.add({
			
		})
	} 
})