//Reto 7.Cramos una clase llamada Contacts que tenga un atributo que sea un array de ojetos de la clase person.
let myLib = require("./person"); //Traigo la clase Person para poder utilizarla mas adelante.



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


console.log(contactos.printAll());

module.exports = {Contacts, pepe, juan, vera};
