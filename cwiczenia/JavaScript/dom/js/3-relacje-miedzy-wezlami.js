"use strict";

let parFirst = document.getElementById("parFirst");
console.log(parFirst.parentElement);
console.log(parFirst.parentNode);

console.log(parFirst.children);
console.log(parFirst.childNodes);

console.log(parFirst.firstElementChild);
console.log(parFirst.lastElementChild);

console.log(parFirst.firstChild);
console.log(parFirst.lastChild);

console.log(parFirst.childNodes[6]);

let parSecond = document.getElementById("parSecond");
console.log(parSecond);

console.log(parSecond.previousElementSibling);
console.log(parSecond.nextElementSibling);

console.log(parSecond.previousSibling);
console.log(parSecond.nextSibling);