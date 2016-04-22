(function(){
 'use strict'

 angular
   .module('myApp')
   .directive('memberSelect', memberSelect)

 function memberSelect(){
   var directive = {
     restrict: 'EA',
     template: `          
           <form >
       
       Username:<br>
       <input type="text"></input><br><br>
       Email:<br>
       <input type="text"></input><br><br>
       Gender:<br>
       <select placeholder="- Make a Selection -">
         
         <option value='' disabled selected>- Make a Selection -</option>
         <option>Male</option>
         <option>Female</option>

       </select>
     
     </form>
`,
     controller: 'mainController'
   }


   return directive;
 }

 
})();