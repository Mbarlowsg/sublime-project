/** @format */
let count = 0;
// Rate of count increase in ms
let deathRate = 555;
let interval;

window.onload = () => {
	setRate("hour");
};

function clearCount() {
	count = 0;
	refreshCount();
}

function refreshCount() {
	document.getElementById("count").innerText = `Count: ${count}`;
}

function setRate(rate) {
	switch (rate) {
		case "second":
			deathRate = 555;
			break;
		case "minute":
			deathRate = 9.25;
			break;
		case "hour":
			deathRate = 0.15;
			break;

		default:
			break;
	}

	if (interval !== null) {
		clearInterval(interval);
		interval = setInterval(increaseCount, deathRate);
	} else {
		interval = setInterval(increaseCount(), deathRate);
	}
}

function increaseCount() {
	count++;
	console.log(count);
	refreshCount();
}
