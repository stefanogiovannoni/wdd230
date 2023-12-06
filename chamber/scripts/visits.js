// visits //
const visitsDisplay = document.querySelector(".visits");
const msToDays = 84600000;

let dVisits = Number(localStorage.getItem("dVisits-key")) || 0;

if (dVisits) {
	let days = (Date.now() - dVisits) / msToDays;

	if (days < 1)
	{
		visitsDisplay.textContent = `Back so soon! Awesome!`;

	} else {
		if(days.toFixed(0) ==1){
			visitsDisplay.textContent =`You last visited ${days.toFixed(0)} days ago.`;
		}
	}
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

localStorage.setItem("dVisits-key", Date.now());