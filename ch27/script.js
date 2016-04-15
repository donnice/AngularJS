function FakeBrowser(initUrl,baseHref){
	this.onUrlChange = function(fn){
		this.urlChange = fn;
	};

	this.url = function(){
		return initUrl;
	};

	this.defer = function(fn,delay){
		setTimeout(function(){
			fn();
		},delay || 0);
	};

	this.baseHref = function(){
		return baseHref;
	};

	this.notifyWhenOutstandingRequests = angular.noop;
}

var browsers = {
	html5: new FakeBrowser('http://www.google.com/base/path?a=b#h', 'index.html'),
	hashbang: new FakeBrowser('http://www.google.com/base/index.html#!/path?a=b#h', 'index.html')
};

angular.module('Html5App',[])
.controller('Html5Ctrl',function($scope,$location){
	$scope.$location = $location;	
})
.controller('HashbangCtrl',function($scope,$location){
	$scope.$location = $location;
});

function initEnv(name){
	var root = angular.element(document.getElementById(name+'-mode'));
	angular.bootstrap(root,[function($compileProvider,
		$locationProvider,$provide){
		$locationProvider.html5Mode(true).hashPrefix('!');
		
	}])
}