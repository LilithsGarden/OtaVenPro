var t = 0;
var txt = 'Please grab some popcorn and enjoy the juicy gossip.';
var speed = 50;

	function typeWriter() {
		if (t < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(t);
		t++;
		setTimeout(typeWriter, speed);
	}
}