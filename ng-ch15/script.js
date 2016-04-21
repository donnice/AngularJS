var lru = $cacheFactory('lru',{
	capacity:20
});

var promise = $http({
	method:'GET',
	url:'/api/users.json'
});

$http.get('/api/users.json',{cache:true})
.success(function(data){})
.error(function(data){});

angular.module('myApp',[])
.config(function($httpProvider,$cacheFactory){
	$httpProvider.defaults.cache = $cacheFactory('lru',{
		capacity:20
	});
});

$http({
	method:'GET',
	url:'/api/users.json'
}).then(resp){
	resp.headers('X-Auth-ID');
};

