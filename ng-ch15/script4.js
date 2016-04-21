var User = $resource('/api/users/:userId.json',{
	userId:'@id',
	sendEmail:{
		method:'POST'
	},
	allInboxes:{
		method:'JSONP',
		isArray:true
	}
});

var User = $resource('/api/users/:id',{
	id:'@'
},{
	sendEmail:{
		method:'PUT',
		transformRequest:function(data,headerFn){
			return JSON.stringify(data);
		}
	}
});

angular.module('myApp',['ngResource'])
.factory('UserService',[
	'$resource',function($resource){
		return $resource('/api/users/:id',{
			id:'@'
		},{
			update:{
				method:'PUT'
			}
		});
	}
]);