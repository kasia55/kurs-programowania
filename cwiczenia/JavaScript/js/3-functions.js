/* es5 funkcja

function pomnozLiczby(liczba1, liczba2, liczba3) {
    let wynik = 0;

    wynik = liczba1 * liczba2 * liczba3;

    return wynik;   
} */

/* drugi zapis

const pomnozLiczby = function(liczba1, liczba2, liczba3) {
    let wynik = 0;

    wynik = liczba1 * liczba2 * liczba3;

    return wynik;   
} */

// es6 funkcja

const pomnozLiczby = (liczba1, liczba2, liczba3) => {
    let wynik = 0;

    wynik = liczba1 * liczba2 * liczba3;

    return wynik;  
}

let wynikDzialaniaFunkcji = pomnozLiczby(2, 4, 5);
let drugiWynikDzialaniaFunkcji = pomnozLiczby(2, 10, 8);

console.log(wynikDzialaniaFunkcji);
console.log(drugiWynikDzialaniaFunkcji);

let mnoznik1 = 1;
let mnoznik2 = 2;
let mnoznik3 = 3;

console.log(pomnozLiczby(mnoznik1, mnoznik2, mnoznik3));

const mnozRazy2 = l1 => { return l1*2; };
console.log(mnozRazy2(8));

/* const pomnozLiczby = function() {

}
 */
/* const es6PomnozLiczby = () => {

} */