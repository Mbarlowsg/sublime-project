/** @format */
let count = 0;
window.onload = () => {
	setInterval(() => {
		document.getElementById("count").innerText = `Count: ${count}`;
		count++;
	}, 555);
};

function clearCount() {
	count = 0;
}

function refreshCount() {}
