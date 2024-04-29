let day = document.getElementById("day");
let time = document.getElementById("time");
let midday = document.getElementById("midday");

setInterval(() => {
  let today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  let dayValue = "AM";
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.textContent = days[today.getDay()];

  dayValue = hr >= 12 ? "PM" : "AM";

  if (hr == 0) {
    hr = 12;
  } else if (hr > 12) {
    hr -= 12;
  }

  hr < 10 ? hr : hr;
  min < 10 ? min : min;
  sec < 10 ? sec : sec;

  time.textContent = `${hr}:${min}:${sec}`;

  midday.textContent = dayValue;
}, 1000);


 