"use strict";

function paniJasiaAlarmuje() {
    console.log("Alarm!!!");
}

let parSecond = document.getElementById("parSecond");

// parSecond.onclick = paniJasiaAlarmuje;

parSecond.addEventListener("click", paniJasiaAlarmuje);

parSecond.removeEventListener("click", paniJasiaAlarmuje);

parSecond.addEventListener("click", () => {
    console.log('Pani Jasia alarmuje, ale w funkcji anonimowej!!!');
});

let pierwszyLinkZKlasaLink = document.querySelector(".link");
console.log(pierwszyLinkZKlasaLink);

pierwszyLinkZKlasaLink.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Znacznik, który wywołał klika: " + e.target);
});

let header = document.getElementById("header");
let mainHeaderText = document.getElementById("main-header-text");

// console.log(header);
// console.log(mainHeaderText);

header.addEventListener('click', (e) => {
    console.log('kliknieto header');
});

mainHeaderText.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('kliknieto h1');
});

let divsRow = document.getElementsByClassName('row');
for (let element of divsRow) {
    element.addEventListener('click', () => {
        console.log("wyświetla się");
    });
}

let buttonEdit = document.getElementsByClassName('edit');
for (let element of buttonEdit) {
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log("wyświetla się edycja");
    });
}