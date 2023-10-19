/** @format */
let count = 0;
// Rate of count increase in ms
let deathRate = 555;
let interval;

window.onload = () => {
	setInterval(increaseCount, 555);
};

function increaseCount() {
	count++;
	document.getElementById("count").innerText = `${count}`;
}
