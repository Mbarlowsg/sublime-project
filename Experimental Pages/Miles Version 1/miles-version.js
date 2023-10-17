/** @format */
let count = 0;
let secondCount = 0;
let minuteCount = 0
let hourCount = 0;
// Rate of count increase in ms
let deathRate;


window.onload = () => {
	setRate("second");
};

function clearCount() {
	count = 0;
	refreshCount();
}

function refreshCount() {
	document.getElementById("secondCount").innerText = `Seconds: ${count}`;
	document.getElementById("minuteCount").innerText = `Minutes: ${count * 60}`;
    document.getElementById("hourCount").innerText = `Hours: ${(count * 3600)}`;
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

    setInterval(increaseCount, 555);
}

function increaseCount() {
	count++;
	console.log(count);
	refreshCount();
}
