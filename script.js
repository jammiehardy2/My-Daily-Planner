var pastTime = document.getElementById("past");
var currentTime = document.getElementById("present");
var futureTime = document.getElementById("future");
var saveText = document.getElementsByClassName("saveBtn");

$(document).ready(function () {
  function getdate() {
    var today = moment().format("llll");
    // var h = today.getHours();
    var currentHour = moment().format("H");
    var hoursArray = [
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
    ];

    for (var i = 0; hoursArray.length; i++) {
      let tagTime = parsInt(hoursArray[i]) + 9;
      if (tagTime > currentHour) {
        today = currentTime;
      }
    }

    function getdate() {
      var today = moment().format("llll");
      // var h = today.getHours();
      var pastTime = moment().format("H");
      var hoursArray = [
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
      ];

      for (var i = 0; hoursArray.length; i++) {
        let tagTime = parsInt(hoursArray[i]) + 9;
        if (tagTime > pastTime) {
          today = pastTime;
        }
      }
    }

    function getdate() {
      var today = moment().format("llll");
      // var h = today.getHours();
      var futureTime = moment().format("H");
      var hoursArray = [
        "9 AM",
        "10 AM",
        "11 AM",
        "12 PM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
      ];

      for (var i = 0; hoursArray.length; i++) {
        let tagTime = parsInt(hoursArray[i]) + 9;
        if (tagTime > futureTime) {
          today = futureTime;
        }
      }
    }
  }

    $(".saveBtn").click(function(event){
      //event.stopPropagation()
      
      var usertext = $(this).siblings("textarea").val()
      //console.log(usertext)
      var key = $(this).attr("data-saving")
      localStorage.setItem(key,usertext)
    })

    //saveText.addEventListener("click", function (event) {
      //console.log("test");

      //localStorage.setItem.on (click saveBtn);

      //$("button").click(getdate);
    //});
});
