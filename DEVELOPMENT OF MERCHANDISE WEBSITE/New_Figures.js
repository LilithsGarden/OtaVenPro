var t = 0;
var txt = 'Ohayo~ Welcome to the New Figures...Give us your money!';
var speed = 50;

	function typeWriter() {
		if (t < txt.length) {
		document.getElementById("demo").innerHTML += txt.charAt(t);
		t++;
		setTimeout(typeWriter, speed);
	}
}