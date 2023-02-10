//Reto 3. Importamos la clase person.

import { Person } from "./person";

 export class Contacts {
    public people: Person[]
     
    constructor(){
        this.people = [];
    };
//Método
 public printCalendar():void{
    console.log(this.people);
    
 }
};

