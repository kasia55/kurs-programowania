let grupa = {
    studenci: [
        {imie: "Marta", wzrost: 160},
        {imie: "Sławek", wzrost: 180},
        {imie: "Wiola", wzrost: 160},
        {imie: "Kamil", wzrost: 170},
        {imie: "Kuba", wzrost: 194}
    ],
    wykladowca: "Krystian"
};

// console.log(grupa);

for (let key in grupa) {
    
    if (Array.isArray(grupa[key]) == true) {
        grupa[key].forEach(element => {
            console.log("Student o imieniu " + element.imie + " ma " + element.wzrost + " cm wzrostu.");
        });
    } 
}

