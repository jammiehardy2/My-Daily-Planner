var pastTime = document.querySelector("#past");
var currentTime = document.querySelector("#present");
var futureTime = document.querySelector ("#future");


$(document).ready(function(){
    function getdate(){
      var today = moment().format("llll");
     // var h = today.getHours();
      var currentHour= moment().format("H");
      var hoursArray = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"]
    
      for (var i =0; hoursArray.length; i++){
        let tagTime=parsInt(hoursArray[i])+9;
        if (tagTime>currentHour){
          (today = currentTime)  
        }
    }
    $(document).ready(function(){
      function getdate(){
        var today = moment().format("llll");
       // var h = today.getHours();
        var pastTime= moment().format("H");
        var hoursArray = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"]
      
        for (var i =0; hoursArray.length; i++){
          let tagTime=parsInt(hoursArray[i])+9;
          if (tagTime>pastTime){
            (today = pastTime)  
          }
      }
      $(document).ready(function(){
        function getdate(){
          var today = moment().format("llll");
         // var h = today.getHours();
          var futureTime= moment().format("H");
          var hoursArray = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM"]
        
          for (var i =0; hoursArray.length; i++){
            let tagTime=parsInt(hoursArray[i])+9;
            if (tagTime>futureTime){
              (today = futureTime)  
            }
        }
  
   $("button").click(getdate);
      }
    }
  }
}
    
});
   

