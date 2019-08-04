function updateUiTime(){
    //   Updates the date and time object every second
      var dateTime = new Date();
      var currentHour = dateTime.getHours();
      var currentMinutes = dateTime.getMinutes();
      var currrentSeconds = dateTime.getSeconds();
      
    //   if the hour/min/second is 0-9 then append 0 to its 10th place
      if(currentHour < 10) currentHour = "0"+currentHour;
      if(currentMinutes < 10) currentMinutes = "0"+currentMinutes;
      if(currrentSeconds < 10) currrentSeconds = "0"+currrentSeconds;
      
      document.querySelector("#hourMinutes").innerHTML = currentHour+":"+currentMinutes+":"+currrentSeconds;
    }
    setInterval(updateUiTime, 1000);
    
    
    