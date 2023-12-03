const baseURL = "https://stefanogiovannoni.github.io/wdd230/";

const linksURL = "https://stefanogiovannoni.github.io/wdd230/data/links.json";

const ul = document.querySelector(".homework");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach(week => {
        const li = document.createElement("li");
        li.innerHTML = `${week.week}:`
        week.links.forEach(links => {
            li.innerHTML += `<a href="${links.url}">${links.title}</a> |`
        })
        li.innerHTML = li.innerHTML.slice(0, -1);
        ul.appendChild(li);
    });
}

