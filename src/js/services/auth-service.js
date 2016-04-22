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
    .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  function authService($http, $window) {
    var user = {};
    return {
      login: function(user) {
        console.log('user',user)
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/login', user);
      },
      logout: function(user) {
        user = null;
        $window.localStorage.clear();
      },
      register: function(user) {
        console.log('User Info:', user)
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/auth/register', user);
      },
      setUserInfo: function(userData) {
        console.log('user data:',userData)
        $window.localStorage.setItem('user', JSON.stringify(userData.data.data.user));
        $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
      },
      getUserInfo: function(userData) {
        console.log('here!')
        return $window.localStorage.getItem('user');
      },
    };
  }

})();





