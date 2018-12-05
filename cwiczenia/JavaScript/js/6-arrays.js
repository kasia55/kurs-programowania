let names = ["Anastazja", "Kuba", "Rafał"];

console.log(names);
console.log(names[1]);

names.push("Konrad");

console.log(names);

names.pop();

console.log(names);

names.unshift("Sławek");

console.log(names);

names.shift(names);

console.log(names);

console.log(names.length);

console.log( names.join() ); 

console.log( names.join( ' - ' ) );

console.log( names.join( ' + ' ) );

names.reverse();
console.log( names );

names = [ 'Marcin', 'Ania', 'Piotrek', 'Grześ' ];
names.sort(); // podstawowa wersja metody
console.log( names );