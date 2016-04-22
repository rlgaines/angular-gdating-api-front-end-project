(function () {

  'use strict';

  angular.module('myApp')
    .controller('mainController', mainController);

  mainController.$inject = ['$rootScope', '$scope', '$location', 'memberService'];

  function mainController($rootScope, $scope, $location, memberService) {
    $scope.user = {};
    memberService.getMembers()
        .then(function(user) {
          console.log(user.data.data[0]);
          $scope.members = user.data.data
        })
        .catch(function(err) {
          // check status code, send appropriate message
          console.log(err);
        });
    };
  

})();

