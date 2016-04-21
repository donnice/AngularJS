var fiddleResponse = 'json='+encodeURIComponent(angular.toJson({
	name:"Dave"
}));

var fiddleHeaders = {
	headers:{
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
};

var app = angular.module('app',[]);

app.factory('NameService',function($http,$q){
	function NameService(){
		var self = this;
		self.name = null;
		self.getName = function(){
			var deferred = $q.defer();
			if(self.name!==null){
				deferred.resolve(self.name+"(from Cache!)")
			} else {
				$http.post('/echo/json/',fiddleResponse,
					fiddleHeaders)
				.success(function(response){
					self.name = response.name;
					deferred.resolve(response.name+"(from Server!)");
				})
				.error(function(response){
					deferred.reject(response);
				});
			}

			return deferred.promise;
		};
	}

	return new NameService();
});

app.controller('MainController',function($scope,NameService){
	$scope.name = "";

	$scope.updateName = function(){
		NameService.getName()
		.then(

			function(name){
				$scope.name = name;
			},

			function(result){
				console.log("Failed to get the name, result is "+result);
			});
	};
});