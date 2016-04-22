(function(){
	'use strict';

angular.module('myApp').controller('mainController', mainController)

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
	$scope.getMembers = function(){
		console.log('win')
		$http({
			method:'GET',
			url: 'http://galvanize-student-apis.herokuapp.com/gdating/members'
		})
		.then(function(results){
			console.log(results.data.data[0]);
			$scope.members = results.data.data;
		})
	}
}

})();


