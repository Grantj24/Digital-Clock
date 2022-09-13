function timeDisplay() {
  const mydate = new Date();
  const year = mydate.getFullYear();
  const day = mydate.getDay();
  const month = mydate.getMonth();
  const daym = mydate.getDate();
  const dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  const montharray = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

  const currentTime = new Date(); 
  const h = currentTime.getHours();
  const m = currentTime.getMinutes();
  const s = currentTime.getSeconds();
  const AM_PM_Variable = ""; 
    if(h === 24){
      h = 0;
   
    }
    if(h < 10){
      h = "0" + h; 
    }

    if(m < 10){
      m = "0" + m;
    }

    if(s < 10){
      s = "0" + s; 
    }
    const myClock = document.getElementById("clockDisplay");
    myClock.textContent = "" +h+ ":" +m+ ":" +s+ "" +AM_PM_Variable+ "\n  " +dayarray[day]+ ", " +daym+ " " +montharray[month]+ " " +year;
    
    myClock.innerText = "" +h+ ":" +m+ ":" +s+ "" +AM_PM_Variable+ "\n  " +dayarray[day]+ ", " +daym+ " " +montharray[month]+ " " +year;

    setTimeout("timeDisplay()", 1000);
}
 
timeDisplay();

//Previous layout, switched format for clock to be in center

// const myClock = document.getElementById("clockDisplay");
// myClock.textContent = "" +dayarray[day]+ " ," +daym+ " " +montharray[month]+ " " +year+ "\n " +h+ ":" +m+ ":" +s+ "" +AM_PM_Variable;

//Could not figure out how to plug in this rule for day

// if(day === 1, 21) {
//   day = st;
// } else(day === 2, 22) {
//   day = nd;
// } else(day === 3, 23) {
//   day = rd;
// }else if(day >= 4) {
//   day = th;
// }