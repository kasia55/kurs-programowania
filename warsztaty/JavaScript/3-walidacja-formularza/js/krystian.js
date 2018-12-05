"use strict";

let wszystkieZgody = document.getElementById('wszystkie-zgody');
let zgodaMarketingowa1 = document.getElementById('zgoda-marketingowa-1');
let zgodaMarketingowa2 = document.getElementById('zgoda-marketingowa-2');

let formularz = document.getElementById('formularz');
let imieInput = document.getElementById('name');
let emailInput = document.getElementById('email');




wszystkieZgody.addEventListener('change', () => {
    zgodaMarketingowa1.checked = wszystkieZgody.checked;
    zgodaMarketingowa2.checked = wszystkieZgody.checked;
    zgodaMarketingowa1.disabled = wszystkieZgody.checked;
    zgodaMarketingowa2.disabled = wszystkieZgody.checked;

});

formularz.addEventListener('submit', (e) => {
    let saBledy = false;

    if (imieInput.value.trim() == "") {
        //trim obcina spacje po obu stronach napisu
        saBledy = true;
        console.log('Uzupełnij pole "Imię i nazwisko"');
    }

    if (emailInput.value.trim() == "") {
        //trim obcina spacje po obu stronach napisu
        saBledy = true;
        console.log('Uzupełnij pole "Email"');
    }
    if (!zgodaMarketingowa1.checked) {
        //trim obcina spacje po obu stronach napisu
        saBledy = true;
        console.log('Zaznacz pierwszą zgodę');
    }
    if (saBledy = true) {
        e.preventDefault();
    }
    
});




