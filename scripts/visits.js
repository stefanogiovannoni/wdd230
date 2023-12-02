const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(localStorage.getItem("numVisits-key")) || 0;

if (numVisits !== 0) {
    visitsDisplay.innerHTML = `<strong>${numVisits}</strong>`;
} else {
    visitsDisplay.textContent = `Is your first time! 🥳`;
}

numVisits++;

localStorage.setItem("numVisits-key", numVisits);