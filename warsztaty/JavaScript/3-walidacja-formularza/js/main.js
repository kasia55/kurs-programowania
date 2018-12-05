"use strict";

let userName = document.getElementById('name');
let email = document.getElementById('email');
let zgoda1 = document.getElementById('zgoda-marketingowa-1');
let zgoda2 = document.getElementById('zgoda-marketingowa-2');
let zgodaWszystko = document.getElementById('wszystkie-zgody');


let przycisk = document.getElementById('wyslij');

// console.log(userName);
// console.log(email);

let infoOBledzie = document.createElement('p');
// console.log(infoOBledzie);
let infoOBledzieText = document.createTextNode('Błąd. Uzupełnij lukę.');
// console.log(infoOBledzieText);
let infoOBledzieClass = document.createAttribute('class');
// console.log(infoOBledzieClass);

let infoOBledzie2 = document.createElement('p');

infoOBledzieClass.value = 'info-o-bledzie';
infoOBledzie.setAttributeNode(infoOBledzieClass);
infoOBledzie.appendChild(infoOBledzieText);

infoOBledzie2.appendChild(infoOBledzieText);
infoOBledzie2.setAttributeNode(infoOBledzieClass);
infoOBledzie2.appendChild(infoOBledzieText);

const sprawdzIWyslij = (e) => {
    if (userName.value == null || userName.value == "") {
        console.log('bląd');
        userName.parentNode.insertBefore(infoOBledzie, userName.nextSibling);
    }
    if (email.value == null || email.value == "") {
        console.log('bląd email');
        email.parentNode.insertBefore(infoOBledzie2, email.nextSibling);
    }
    if (zgoda1.checked == false) {
        console.log('bląd zgoda1');
    } 
    e.preventDefault();
}

przycisk.addEventListener('click', sprawdzIWyslij);