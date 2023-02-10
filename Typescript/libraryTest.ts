//Reto 7. Probar la clase Library.
import { Book } from "./book";
import { Library } from "./library";


let libro: Book = new Book("El Nombre del Viento", 872,
         "978-84-01-33720-8", "Patrick Rothfuss", "Plaza Janés");
let libro2: Book = new Book("Introduccion a Javascript", 233,
         "234433-BC23333","Joseph Smith", "Now Editions");


let biblioteca: Library = new Library([libro, libro2], 
                            "Calle falsa 123", "Celia");


console.log(biblioteca.getAddress());
console.log(biblioteca.getManager());

console.log(biblioteca.toString());
console.log(biblioteca.getNumberOfBooks());
console.log(biblioteca.findByAuthor("Joseph Smith"));