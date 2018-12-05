"use strict";

let h1MaimHeader = document.getElementById("main-header");
console.log(h1MaimHeader);

h1MaimHeader.innerText = "nowy header text";

let header = document.getElementsByTagName("header")[0];
// header.innerText = "nowy inner text <p>tekst w znaczniku</p>";
// header.innerHTML = "<div> nowy inner text <p>tekst w znaczniku</p></div>";
// header.outerHTML = "<div> nowy inner text <p>tekst w znaczniku</p></div>";

let headerAdditionalElement = document.createElement("p");
let AdditionalElementText = document.createTextNode("dodatkowy tekst")

headerAdditionalElement.appendChild(AdditionalElementText);

header.appendChild(headerAdditionalElement);

header.outerHTML = "<div id='nowy-div'>nowy outer text <p>nowy paragraf</p></div>"

let nowyDiv = document.getElementById("nowy-div");
nowyDiv.setAttribute("data-class", "nowa-klasa");
nowyDiv.className = "klasa druga-klasa trzecia-klasa";
nowyDiv.id = "calkiem-nowy-div";
nowyDiv.classList.remove("klasa");
nowyDiv.classList.add("kasia");

nowyDiv.classList.toggle("toggle");
nowyDiv.classList.toggle("toggle");
nowyDiv.classList.toggle("toggle");

console.log(nowyDiv.classList);

nowyDiv.style.color = "red";
nowyDiv.style.background-color = "green";

console.log(header);