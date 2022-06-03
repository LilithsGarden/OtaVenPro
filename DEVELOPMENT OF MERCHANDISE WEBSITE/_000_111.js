var t = 0;
var txt = 'Konnichiwa! Welcome to Otaku Haven!!.';
var speed = 50;

	function typeWriter() {
		if (t < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(t);
		t++;
		setTimeout(typeWriter, speed);
	}
}


// Get the modal
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(events) {
    if (events.target == modal2) {
        modal2.style.display = "none";
    }
}
