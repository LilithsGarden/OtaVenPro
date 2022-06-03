var t = 0;
var txt = 'Gomenasai! Please relax while we prepare.';
var speed = 50;

	function typeWriter() {
		if (t < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(t);
		t++;
		setTimeout(typeWriter, speed);
	}
}




// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2026 23:59:59").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demi").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demi").innerHTML = "EXPIRED";
  }
}, 1000);