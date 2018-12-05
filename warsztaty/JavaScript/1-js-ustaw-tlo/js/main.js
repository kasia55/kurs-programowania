"use strict";

let paragraf1 = document.getElementById('pierwszy');
let paragraf2 = document.getElementById('drugi');
let przycisk = document.getElementById('button');

// console.log(przycisk);

const ustawTlo = () => {
    paragraf1.style.backgroundColor = 'red';
    paragraf2.style.backgroundColor = 'yellow';
}

przycisk.addEventListener('click', ustawTlo);