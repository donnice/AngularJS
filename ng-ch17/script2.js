angular.module('myApp',[])
.controller('DashboardController',function($scope,GithubService){
	GithubService.getPullRequests()
	.then(function(data){
		$scope.pullRequests = data;
	})
})
.factory('GithubService',function($q,$http){
	var getPullRequests = function(){
		var deferred = $q.defer();

		$http.get('https://api.github.com/repos/angular/angular.js/pulls')
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function(reason){
			deferred.reject(reason);
		})
		return deferred.promise;
	}

	return{
		getPullRequests:getPullRequests
	};
});