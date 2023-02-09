//Reto 5. Probar Clase Book.
import { Book } from "./book";

let libro: Book = new Book("El Nombre del Viento", 872,
         "978-84-01-33720-8", "Patrick Rothfuss", "Plaza Janés");

//console.log(libro);

//Probando getters.
console.log(libro.getTitle());
console.log(libro.getNPages());
console.log(libro.getIsbn());
console.log(libro.getAuthor());
console.log(libro.getEditorial());

//Probando Setters.
/*libro.setTitle("BlaBla");
libro.setnPages(2828);
libro.setIsbn("Numero aletorio");
libro.setAuthor("Yo");
libro.setEditorial("Celia's Editorial");
//console.log(libro);*/

//Probando tostring
console.log(libro.toString());






