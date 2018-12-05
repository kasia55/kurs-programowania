let person = { 
    name: 'Krystian', 
    age: 35 
};

for (let key in person) {
    console.log(person[key]); // Wypisze kolejno Krystian oraz 35
}

// node -v
//