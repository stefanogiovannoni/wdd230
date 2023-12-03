const baseURL = "https://stefanogiovannoni.github.io/wdd230/";

const linksURL = "https://stefanogiovannoni.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach(weekindex => {
        const li = document.createElement("li");
        li.innerHTML = `${weekindex.week}:`
        weekindex.links.forEach(link => {
            li.innerHTML + li.innerHTML `<a href="${link.url}">${link.title}</a> |`
        })
        li.innerHTML = li.innerHTML(0, -1);
        ul.appendChild(li);
    });
}