const year = document.querySelector('#year');
const options = {  year: "numeric"};
year.innerHTML = new Date().toLocaleDateString("en-US", options);

let oLastModif = new Date(document.lastModified);
const options2 = {  month: "long",
day: "numeric",
year: "numeric",
hour: "numeric"};
lastModified.innerHTML = new Date().toLocaleDateString("en-US", options2);

