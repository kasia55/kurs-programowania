"use strict";

let submitButton = document.querySelector('input[type="submit"]');
console.log(submitButton);

const wyslijFormularz = (e) => {
    let imie = document.querySelector('input[name="fname"]');
    let nazwisko = document.querySelector('input[name="lname"]');
    console.log(imie.value);
    console.log(nazwisko.value);
    e.preventDefault();
}

submitButton.addEventListener('click', wyslijFormularz);
