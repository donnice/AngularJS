angular.module('myApp',[])
.run(function($rootScope,$timeout){
	$timeout(function(){
		$rootScope.imgSrc = 'http://199.115.116.78:1024/h/6d59015747c8112ef56fc928d19011cc8851973c-109908-900-1350-jpg/keystamp=1461114900-702d8fd040/HTE7Dq2.jpg';
		$rootScope.realSrc = 'http://g.e-hentai.org/s/6d59015747/615803-2';
	},1000);
});