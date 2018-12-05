class Car {
    constructor(name, color) {
    this.name = name;
    this.color = color;
    }
    opiszAuto() {
        console.log("Samochód " + this.name + " ma kolor " + this.color);
    }
}

// let fiat = new Car("Fiat", "czerwony");

// fiat.opiszAuto();

let marki = [ 
    ["Fiat", "czerwony"], 
    ["Opel", "niebieski"], 
    ["Subaru", "srebrny"], 
    ["Ford", "złoty"], 
    ["KIA", "zielony"], 
    ["BMW", "pomarańczowy"]
];
let samochody = [];

// for (let index = 0; index < marki.length; index++) {
//     samochody.push(new Car(marki[index], kolory[index]));
//     samochody[index].opiszAuto();
// }

// marki.forEach(function(element, index){
//     samochody.push(new Car(element, kolory[index]));
// });

// samochody.forEach(element => {
//     element.opiszAuto();
// });

marki.forEach(function(el, i, arr) {
    console.log(el, i, marki);
});

