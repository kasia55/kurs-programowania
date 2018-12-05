"use strict";

let parFirst = document.getElementById("parFirst");
console.log(parFirst);

let superLinki = document.getElementsByClassName("superlink");
console.log(superLinki);

let wszystkieLinki = document.getElementsByTagName("a");
console.log(wszystkieLinki);

let pierwszyLinkSuperLink = document.querySelector(".superlink");
console.log(pierwszyLinkSuperLink);

let wszystkieLinkiSuperLink = document.querySelectorAll(".superlink");
console.log(wszystkieLinkiSuperLink);

for (let element of wszystkieLinki) {
    console.log(element);   
}

