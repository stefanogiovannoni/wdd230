const baseURL = "https://stefanogiovannoni.github.io/wdd230/";
const url = "https://stefanogiovannoni.github.io/wdd230/chamber/data/members.json";
const article = document.querySelector("article");

async function getMembersData()
{
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

function displayMembers (members) {
    members.forEach(member => {
        const card = document.createElement("section");
        const imageurl = document.createElement("img");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phonenumber = document.createElement("p");
        const weburl = document.createElement("a");
        const membership = document.createElement("p");
        const founded = document.createElement("p");
        const employees = document.createElement("p");
        
        
        
        imageurl.setAttribute("src", member.imageurl);
        imageurl.setAttribute("alt", `Logo of ${member.name}`);
        imageurl.setAttribute("loading", "lazy");
        imageurl.setAttribute("width", "340");
        imageurl.setAttribute("heigth", "440");

        name.textContent = `${member.name}`;

        address.textContent = `${member.address}`;
        address.setAttribute("class", "address");

        phonenumber.textContent = `${member.phonenumber}`;
        phonenumber.setAttribute("class", "phonenumber");

        weburl.textContent = member.weburl;
        weburl.setAttribute("href", member.weburl);

        membership.textContent = `Membership: ${member.membership}`;
        membership.setAttribute("class", "membership");

        founded.textContent = `Founded: ${member.founded}`;
        founded.setAttribute("class", "founded");

        employees.textContent = `Employees: ${member.employees}`;
        employees.setAttribute("class", "employees");

        card.appendChild(imageurl);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(weburl);
        card.appendChild(membership);
        card.appendChild(founded);
        card.appendChild(employees);

        article.appendChild(card);
    });
}