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
			id:$scope.list().length+1,
			label:'Item'+$scope.list().length
		});
	} ;
});
.factory('ItemService',[function(){
	var items = [
		{id:1,label:'Item 0'},
		{id:2,label:'Item 1'}
	];
	return{
		list:function(){
			return items;
		},
		add:function(item){
			items.push(item);
		}
	};
}]);