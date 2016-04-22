(function(){
 'use strict'

 angular
   .module('myApp')
   .directive('singleMember', singleMember)

 function singleMember(){
   var directive = {
     restrict: 'EA',
     template: `          
           <div class="row">
                       
               <div id="listleft" class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4">
                       
                       <img src="{{member.avatar}}">
                       
               </div>
                       
               <div id="listright" class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-xs-7">
       
                   <h4>{{member.names.firstName}} {{member.names.lastName}}</h4><br>
                   Username: {{member.username}}<br>
                   email: {{member.email}}<br>
                   website: {{member.website}}
                   
               </div>

           </div>
                   
           <div class="row">
                   
               <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   
                   <p>{{member.names.firstName}} {{member.names.lastName}}</p><br>
                   <p>Address:<br>
                   {{member.address.street}}<br>
                   {{member.address.suite}}<br>
                   {{member.address.city}}<br>
                   {{member.address.zipcode}}
                   </p>
             
               </div>
               
           </div>

           <a href="#/members/{{member.id}}">See Profile</a>
`,
     controller: 'mainController'
   }


   return directive;
 }

 
})();