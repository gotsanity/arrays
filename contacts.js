let contacts = [
    { name: "Jesse", email: "jesse.harlan@centralia.edu" },
    { name: "Bob", email: "bob.person@centralia.edu" },
    { name: "Student", email: "student@student.centralia.edu" },
    { name: "external", email: "external@site.com" },
    { name: "new person", email: "new@new.com" }
];

let submit = document.getElementById("submitFilter");
let textbox = document.getElementById("filter");

submit.onclick = filter;

function filter() {
    let textbox = document.getElementById("filter");
    console.log("filtering by", textbox.value);

    let searchTerm = textbox.value;

    let filteredContacts = contacts.filter((elem) => {
        return elem.email.toLowerCase().endsWith(searchTerm.toLowerCase());
    });

    emptyList();
    fillList(filteredContacts);
}

let reset = document.getElementById("resetFilter");
reset.onclick = function() {
    emptyList();
    fillList(contacts);
}

fillList(contacts);

function fillList(data) {
    console.log("filling the list with", data);
    let theList = document.getElementById("contact-list");

    for (let i = 0; i < data.length; i++) {
        let elem = document.createElement("li");
        elem.className = "contact-item";
        elem.appendChild(document.createTextNode(`${data[i].name} - ${data[i].email}`));
        theList.appendChild(elem);
    }
}

function emptyList() {
    console.log("Emptying the list");
    // empty the list
    let theList = document.getElementById("contact-list");

    let children = Array.from(theList.children);

    children.forEach((elem) => {
        elem.remove();
    });
}