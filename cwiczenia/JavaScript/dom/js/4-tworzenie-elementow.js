"use strict";

let btn = document.createElement("button");
console.log(btn);

let btnText = document.createTextNode("Click Me!");
console.log(btnText);

let classAtr = document.createAttribute("class");
console.log(classAtr);

classAtr.value = "btn";
btn.setAttributeNode(classAtr);
btn.appendChild(btnText);
btn.setAttribute("id", "myButton");

btn.removeAttribute("id");

let parFirst = document.getElementById("parFirst");
parFirst.appendChild(btn);

// document.body.appendChild(btn);

parFirst.removeChild(btn);