//Probar la clase contacts en este fichero.

import { Contacts } from "./contacts";
import { Person } from "./person";

let persona : Person = new Person("Celia", 25, "C/La Mota");

let persona2 : Person = new Person("Jesus", 31, "C/Reyes Católicos 4");

let persona3  : Person = new Person("Vera", 27, "Carrer Major");

let agenda : Contacts = new Contacts;

agenda.people = [persona, persona2, persona3];
agenda.printCalendar();