//Reto 8. Importamos aqui la clase contacts y la testeamos.
let myLib1 = require("./person");
let myLib = require("./contacts");

//Crear un objeto de la clase contacts y comprobar:
let pepe = new myLib1.Person(1.90, 90, 1989, ["comer", "pasear", "ir al cine"]);
let juan = new myLib1.Person(1.95, 95, 1992, ["leer", "estudiar", "mirar las estrellas"]);
let vera = new myLib1.Person(1.70, 60, 1995, ["bailar", "esquiar", "viajar"]);

let contactos = new myLib.Contacts;

contactos.arrayPersons = [pepe, juan, vera]// no necesito ponerle llaves ya que ha sido declarado antes.

console.log(contactos.printAll());