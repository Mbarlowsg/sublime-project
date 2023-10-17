/** @format */
let count = 0;
window.onload = () => {
	setInterval(() => {
		count++;
		console.log(count);
		refreshCount();
	}, 555);

};

function clearCount() {
	count = 0;
	refreshCount();
}

function refreshCount() {
	document.getElementById("count").innerText = `Count: ${count}`;
}

