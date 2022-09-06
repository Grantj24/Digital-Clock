var date = new Date
var current_time = date.getHours() +":"+date.getMinutes()+":"+ date.getSeconds();
var current_date = date.getFullYear()+"-"+(date.getMonth('')+1)+"-"+ date.getDate();
var date_time = current_time+"<br>"+current_date;

document.getElementById("p1").innerHTML = date_time; 