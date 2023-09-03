setInterval(function(){
let a=new Date();
let month=a.getMonth();
let year=a.getFullYear();
let date=a.getDate();
let hour=a.getHours();
let minutes =a.getMinutes();
let seconds =a.getSeconds()

document.getElementById("Date2").innerHTML = (date.toString() +"/"+ month.toString());
document.getElementById("Year2").innerHTML = year.toString();
document.getElementById("Time2").innerHTML = (hour.toString() +":" + minutes.toString() + ":"+ 
 seconds.toString());
},900)

//console.log(a.getDate())
//console.log(a.getMonth())
//console.log(a.getMinutes())
//console.log(a.getSeconds()) 
//console.log(a.getFullYear())
//console.log(a.getHours())