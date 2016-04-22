(function () {

  'use strict';

  /**
  1. login
  2. logout
  3. register
  4. set user info into localstorage
  5. get user info from localstorage
  **/

  angular.module('myApp')
    .service('memberService', memberService);

  memberService.$inject = ['$http', '$window'];

  function memberService($http, $window) {
    var user = {};
    return {
      getMembers: function() {
        // console.log('user')
        return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members');
      }
    };
  }

})();