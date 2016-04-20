angular.module('myApp',[])
.controller('SubjectsCtrl',function($scope){
	$scope.subjects = [
	{name:"Environmental Engineering",university:"East China University of Science and Technology"},
	{name:"Chemical Engineering",university:"University of Michigan at Ann Arbor"},
	{name:"Computer Science",university:"Georgia Institute of Technology"},
	{name:"Electrical and Computer Engineering",university:"Carnegie Mellon University"},
	{name:"Mechanical Engineering",university:"Massachuset Institute of Technology"},
	{name:"Materials Science",university:"Oxford University"},
	{name:"Civil Engineering",university:"The University of Hong Kong"},
	{name:"Biotechnology",university:"Hong Kong University of Science and Technology"}
	];
});