function changeDisplay() {
  const datetime = new Date();
  const myClock = document.getElementById("clockDisplay");
  const children = myClock.childNodes
  children.forEach(child => child.remove())
  const newDisplay = document.createElement('div')
  const time = document.createElement('div')
  const timeContents = document.createTextNode(formatTime(datetime))
  time.appendChild(timeContents)
  const date = document.createElement('div')
  const dateContents = document.createTextNode(formatDate(datetime))
  date.appendChild(dateContents)
  newDisplay.append(time,date)
  myClock.append(newDisplay)  
}

function formatTime(currentTime){
  const h = currentTime.getHours();
  const m = currentTime.getMinutes();
  const s = currentTime.getSeconds();
  return addLeadingZero(formatStandardTime(h)) + ":" + addLeadingZero(m) + ":" + addLeadingZero(s)
}

function formatStandardTime(h){
  if(h <= 12) return h
  if(h === 24) return 0
  return h - 12
}

function addLeadingZero(number) {
  if(number < 10) return "0" + number;
  return number
  }


function formatDate(mydate){ 
  const dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  const montharray = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  const year = mydate.getFullYear();
  const day = mydate.getDay();
  const month = mydate.getMonth();
  const daym = mydate.getDate();
  return dayarray[day] + ", " + daym + addSuffix(daym) + " " + montharray[month] + " " + year
}

function addSuffix(number) {
  if (number === 1 || number === 21) return "st"
  if (number === 2 || number === 22) return "nd"
  if (number === 3 || number === 23) return "rd"
  return "th"
}

setInterval(changeDisplay, 1000);
changeDisplay();

