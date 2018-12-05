let domKuby = {
    pokoje: 3,
    kolor: "różowy",
    dach: "skośny",
    opiszDom: function() {
        console.log(this.pokoje);
    }
}

let domKlaudii = {
    pokoje: 2,
    kolor: "szary",
    dach: "płaski",
    opiszDom: function() {
        console.log(this.pokoje);
    }
}

console.log(domKuby);

console.log(domKuby.kolor);

domKuby.opiszDom();

domKlaudii.opiszDom();

class Person {
    constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    }
    opiszOsobe() {
        console.log("Nazywam się: " + this.name + " " + this.surname);
    }
}

let kuba = new Person("Kuba", "Kowalski");

kuba.opiszOsobe();