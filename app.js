var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

//update countdown every second

var x = setInterval(function () {
  var now = new Date().getTime();

  var timeLeft = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 31));
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  var countDownHTML = `
  <div class="time"><h1> ${months}</h1><span>months</span></div>
  <div class="time"><h1>${days}</h1><span>days</span></div>
  <div class="time"><h1>${hours}</h1><span>hours</span></div>
  <div class="time"><h1>${minutes}</h1><span>minutes</span></div>
  <div class="time"><h1>${seconds}</h1><span>seconds</span></div>
  `;

  //display the result
  document.getElementById("count-down").innerHTML = countDownHTML;
}, 1000);
