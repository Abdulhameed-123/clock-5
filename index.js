 setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "Am";
  
  if (hour > 12) {
     hr -= 12;
     am_pm = "Pm";
  }
  
  if (hour == 0) {
     hr = 12;
     am_pm = "Am";
  }
  
  
  hour = hour > 10 ? "0" + hour : hour;
  min = min > 10 ? "0" + min : min;
  sec = sec > 10 ? "0" + sec : sec;
  
 let currentTime = hour + ":" 
 + min + ":" + sec + am_pm;
 
 document.getElementById("clock").innerHTML = currentTime
}
showTime();
