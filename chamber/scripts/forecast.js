const currentTempp = document.querySelector("#current-temp2");
const weatherIconn = document.querySelector("#weather-icon2");
const captionDescc = document.querySelector("figcaption");

const url = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=49.75&lon=6.64&appid=ad9a5c72487edbdde62b86d508b682bc"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    
    currentTempp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc =  `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIconn.setAttribute('src', iconsrc);
    weatherIconn.setAttribute('alt', `png of ${desc}`);
    captionDescc.textContent = `${desc}`;

}

apiFetch();