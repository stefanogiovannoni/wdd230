const year = document.querySelector('#year');
const options = {  year: "numeric"};
year.innerHTML = new Date().toLocaleDateString("en-US", options);

let oLastModif = new Date(document.lastModified);
const options2 = {  month: "long",
day: "numeric",
year: "numeric",
hour: "numeric"};
lastModified.innerHTML = new Date().toLocaleDateString("en-US", options2);

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
