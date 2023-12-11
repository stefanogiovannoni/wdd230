const today = new Date;
const closeBanner = document.querySelector("#close");
const banner = document.querySelector("#banner");

// console.log(`Today = ${today.getDay()}`);

if (today.getDay() == 0) {
    banner.style.display = "none";
} else if (today.getDay() > 3) {
    banner.style.display = "none";
} else {
    banner.style.display = "flex";
};

closeBanner.addEventListener("click", () => {
    banner.style.display = 'none';
});