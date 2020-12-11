$(document).ready(function(){
    function getdate(){
      var today = moment().format("llll");
     // var h = today.getHours();
      var currentHour= moment().format("H");
      var hoursArray = ["9 AM","10 AM","11 AM","12 PM"]
    
      for (var i =0; hoursArray.length; i++){
        let tagTime=parsInt(hoursArray[i])+9;
        if (tagTime>currentHour){
          .past   
        }
    }
   
  
   $("button").click(getdate);
  });
