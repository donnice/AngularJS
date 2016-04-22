angular.module('myApp',[])
.config(function($httpProvider){
	var interceptor = function($q,$rootScopr,Auth){
		return{
			'response':function(resp){
				if(resp.config.url == '/api/login'){
					Auth.setToken(resp.data.token);
				}
				return resp;
			},
			'responseError':function(rejection){
				switch(rejection.status){
					case 401:
						if(rejection.config.url!=='api/login')
							$rootScope.$broadcast('auth:loginRequired');
						break;
					case 403:
						$rootScope.$broadcast('auth:forbidden');
						break;
					case 404:
						$rootScope.$broadcast('page:notFound');
						break;
					case 500:
						$rootScope.$broadcast('server:error');
						break;
				}
				return $q.reject(rejection);
			}
		};
	};
});