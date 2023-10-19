/** @format */
let count = "000000000" + "1";
// Rate of count increase in ms
let deathRate = 555;
let interval;

window.onload = () => {
	setInterval(increaseCount, 555);
	setTimeout(fadeInMessageOne, 7000);
	setTimeout(fadeInMessageTwo, 12000);
};

function increaseCount() {
	count++;
	document.getElementById("count").innerText = `${count}`;
}

function fadeInMessageOne(message) {
	document.getElementById("message-1").classList.add("fade-in-text");
	document.getElementById("message-1").classList.remove("hide-text");
}

function fadeInMessageTwo() {
	document.getElementById("message-2").classList.add("fade-in-text");
	document.getElementById("message-2").classList.remove("hide-text");
}

function refreshCount() {
	for (let index = 0; index < count.length; index++) {
		console.log(index);
	}
}
