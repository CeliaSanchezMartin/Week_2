//Reto 7.Cramos una clase llamada Contacts que tenga un atributo que sea un array de ojetos de la clase person.
let myLib = require("./person"); //Traigo la clase Person para poder utilizarla mas adelante.

let pepe = new myLib.Person(1.90, 90, 1989, ["comer", "pasear", "ir al cine"]);
let juan = new myLib.Person(1.95, 95, 1992, ["leer", "estudiar", "mirar las estrellas"]);
let vera = new myLib.Person(1.70, 60, 1995, ["bailar", "esquiar", "viajar"]);


class Contacts {
    constructor (){
      this.arrayPersons = [];
    }

    printAll(){
        for (let  i = 0; i < this.arrayPersons.length; i++){
            console.log(this.arrayPersons);
        }
    }
};

let contactos = new Contacts();
contactos.arrayPersons = [{pepe}, {juan}, {vera}]

console.log(contactos.printAll());

module.exports = {Contacts, pepe, juan, vera};
