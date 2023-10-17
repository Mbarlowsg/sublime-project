/** @format */
let count = 0;
let dayCount = 555;
let monthCount = 0;
let yearCount = 0;

window.onload = () => {
	setInterval(() => {
		document.getElementById("count").innerText = `Count: ${count}`;
		count++;
	}, dayCount);
};

function clearCount() {
	count = 0;
}

function refreshCount() {}
