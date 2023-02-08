//Reto 2. Importamos la clase person.

import { Person } from "./person";

let persona : Person = new Person("Celia", 25, "C/La Mota");
console.log(persona);

persona.setAdress("Calle Falsa 123");
console.log(persona.getAddress());
persona.printName();
console.log(persona.yearOfBirth(2022));

