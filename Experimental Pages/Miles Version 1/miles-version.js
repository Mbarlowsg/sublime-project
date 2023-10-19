/** @format */
let count = 0;
// Rate of count increase in ms
let deathRate = 500;
let interval;


window.onload = () => {
	refreshCount();
};

function clearCount() {
	count = 0;
	refreshCount();
}

// function refreshCount() {
// 	document.getElementById("secondCount").innerText = `Seconds: ${count}`;
// 	document.getElementById("minuteCount").innerText = `Minutes: ${count * 60}`;
//     document.getElementById("hourCount").innerText = `Hours: ${(count * 3600)}`;
// }

// function setRate(rate) {
// 	switch (rate) {
// 		case "second":
// 			deathRate = 555;
// 			break;
// 		case "minute":
// 			deathRate = 9.25;
// 			break;
// 		case "hour":
// 			deathRate = 0.15;
// 			break;

// 		default:
// 			break;
// 	}

//     setInterval(increaseCount, 555);
// }
function refreshCount() {
	document.getElementById("secondCount").innerText = `Second: ${Math.round(count)}`;
	document.getElementById("minuteCount").innerText = `Minute: ${Math.round(count * 60)}`;
	document.getElementById("hourCount").innerText = `Hour: ${(Math.round(count * 3600))}`;
	document.getElementById("dayCount").innerText = `Day: ${(Math.round(count * 24 * 3600))}`;
	document.getElementById("yearCount").innerText = `Year: ${(Math.round(count * 365 * 24 * 3600))}`;
	if (interval !== null) {
		clearInterval(interval);
		interval = setInterval(increaseCount, deathRate);
	} else {
		interval = setInterval(increaseCount(), deathRate);
	}
}

function increaseCount() {
	count = count + (1.8/2);
	console.log(count);
	refreshCount();
}
