(function(){
 'use strict'

 angular
   .module('myApp')
   .directive('member', member)

 function member(){
   var directive = {
     restrict: 'EA',
     template: `  <div class="row">
                     <div class="col-md-5" ng-repeat="members in members">
                      <h1>HERE</h1>
                      <h2>{{members.names.firstName}}</h2>
                     </div>
                   </div>`,
     controller: 'mainController'
   }
   return directive;
 }

 
})();