const url = "https://github.com/stefanogiovannoni/wdd230/chamber/data/members.json";
const members = document.querySelector("members");

async function getMembersData()
{
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement("section");
        let imageurl = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phonenumber = document.createElement("p");
        let weburl = document.createElement("a");
        let membership = document.createElement("p");
        let founded = document.createElement("p");
        let employees = document.createElement("p");
        
        
        
        imageurl.setAttribute("src", member.imageurl);
        imageurl.setAttribute("alt", `Logo of ${member.name}`);
        imageurl.setAttribute("loading", "lazy");
        imageurl.setAttribute("width", "340");
        imageurl.setAttribute("heigth", "440");

        name.textContent = `${member.name}`;

        address.textContent = `${member.address}`;

        phonenumber.textContent = `${member.phonenumber}`;

        weburl.textContent = `${member.weburl}`;
        weburl.setAttribute = `"href", ${member.weburl}`;

        membership.textContent = `${member.membership}`;

        founded.textContent = `${member.founded}`;

        employees.textContent = `${member.employees}`;

        card.appendChild(imageurl);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phonenumber);
        card.appendChild(weburl);
        card.appendChild(membership);
        card.appendChild(founded);
        card.appendChild(employees);

        members.appendChild(card);
    });
}