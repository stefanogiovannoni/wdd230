const forecastDesc = document.querySelector("#forecast");
const forecurl = "https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&appid=a1f42a7299d9f068f7f44929a709c902";

async function foreAPI() {
    try {
        const response = await fetch(forecurl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayForecast(data) {
    const forecastData = data.fdata;

    const forecastDays = forecastData.slice(1, 4);

    forecastDays.forEach(day => {
        const forecastdatadays = createForecastData(day);
        forecastDesc.appendChild(forecastdatadays);
    });

}

function createForecastData(fdata) {
    
    let card = document.createElement("div");
    let day = document.createElement("p");
    let temp = document.createElement("p");
    let img = document.createElement("img");
    let desc = document.createElement("p");

    const dayn = new Date(fdata.dt * 1000)

    day.textContent = `${dayn}`;
    temp.textContent = `${fdata.main.temp}`;
    img.setAttribute("src",`https://openweathermap.org/img/w/${fdata.weather[0].icon}.png`);
    img.setAttribute("alt", `${fdata.weather[0].description}`);
    desc.textContent = `${fdata.weather[0].main}`;

    card.appendChild(day);
    card.appendChild(temp);
    card.appendChild(img);
    card.appendChild(desc);

    return card;
}

foreAPI();