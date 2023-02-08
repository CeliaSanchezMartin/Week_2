//Reto 6. 
//Importamos a este fichero la clase person.
let myLib = require("./person")

let pepe = new myLib.Person(1.70, 80, 1995);
console.log(pepe);
console.log(pepe.calcIMC());
console.log(pepe.calcEdad(2023));
pepe.hobbies = ["correr", "escalar", "montar a caballo" ];

pepe.printHob();

pepe.printAll();