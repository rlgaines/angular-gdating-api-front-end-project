(function(){
 'use strict'

 angular
   .module('myApp')
   .directive('member', member)

 function member(){
   var directive = {
     restrict: 'EA',
     template: `  
<div class="row">
 
  <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
       
       <div class="row" id="memberListItem" ng-repeat="member in members | limitTo: 10">
           
           <div id="listleft" class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">

               <img src="{{member.avatar}}">

           </div>
             
           <div id="listright" class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-7">
               
               Username: {{member.username}}<br>
               {{member.names.firstName}} 
               {{member.names.lastName}}<br>
               <a href ng-click="showthis = !showthis">showthis</a>

           </div>

       <div class="container" id="memberFull" ng-show="showthis" single-member>
           
       </div>
       </div>
               
   </div>

   <div id="searchBox" ng-show="search" member-select>
     
</div>
</div>`,
     controller: 'mainController'
   }


   return directive;
 }

 
})();