angular.module('xmpl.service',[])
.value('greeter',{
	salutation:'Hello Shujie!',
	localize:function(localization){
		this.salutation = localization.salutation;
	},
	greet:function(name){
		return this.salutation+' '+name+'!';
	}
})
.value('user',{
	load:function(name){
		this.name = name;
	}
});

angular.module('xmpl.directive',[]);

angular.module('xmpl.filter',[])
.filter('greetings',function(){
	return function(name){
		return 'Hello Helen and '+name+'!';
	};
});

angular.module('xmpl',['xmpl.service','xmpl.directive','xmpl.filter'])
.run(function(greeter,user){
	greeter.localize({
		salutation:'Guten Abend!'
	});
	user.load('Yakami');
})
.controller('XmplController',function($scope,greeter,user){
	$scope.greeting = greeter.greet(user.name);
});