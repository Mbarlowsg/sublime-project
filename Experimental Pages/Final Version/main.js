/** @format */
let count = 0;
// Rate of count increase in ms
let deathRate = 555;
let interval;

window.onload = () => {
	setInterval(increaseCount, 555);
	setTimeout(fadeInMessageOne, 10000);
	setTimeout(fadeInMessageTwo, 12000);
};

function increaseCount() {
	count++;
	document.getElementById("count").innerText = `${count}`;
}

function fadeInMessageOne(message) {
	document.getElementById("message-one").classList.add("fade-in-text");
}

function fadeInMessageTwo() {
	document.getElementById("message-two").classList.add("fade-in-text");
}
