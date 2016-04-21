angular.module('myApp',[])
.factory('myInterceptor',function($q){
	var interceptor = {
		'request':function(config){
			return config;
		},
		'response':function(response){
			return response;
		},
		'requestError':function(rejection){
			return response;
			//return $q.reject(rejection)
		},
		'responseError':function(rejection){
			return rejection;
		}
	};
})
.config(function($httpProvider){
	$httpProvider.interceptors.push('myInterceptor');
});

var User = $resource('/api/users/:userId.json',
{
	userId:'@id'
});

User.get({
	id:'123'
},function(resp){

},function(err){

});

User.query(function(users){
	var user = users[0];
});

User.save({},{
	name:'Ari'
},function(response){
//success response
},function(response){
//failure response
});

User.delete({},{//remove
	id:'123'
},//function)
;

User.get({id:'123'},function(user){
	user.name = 'Ari';
	user.$save();
});
User.save({id:'123'},{name:'Ari'});

User.get({id:'123'},function(user){
	$scope.user = user;
})
