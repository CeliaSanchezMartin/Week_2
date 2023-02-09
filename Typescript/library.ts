//Reto 6. clase Library.

import { Book } from "./book";

export class Library{
    //constructor.
    constructor(private books : Book[], 
        private address : string,
        private manager: string){}
    //Métodos.
    //Getters para adress y manager.
    public getAddress():string{
        return this.address
    };
    public getManager():string{
        return this.manager
    };
    //Setters para address y manager.
    public setAdress(newAdress:string):void{
        this.address = newAdress
    };
    public setManager(newManager : string):void{
        this.manager = newManager
    }

    //toString.
    public toString():void{
        for (let i =0; i < this.books.length; i++){
        console.log("Book" + (i+1) + ": \n" + this.books[i].toString());
    }
    };

    public getNumberOfBooks ():number{
        return this.books.length
    };

    public findByAuthor (author:string): Book []{
        let libros: Book[] = []; 
        for (let i = 0; i < this.books.length; i++ ){
            if(this.books[i].getAuthor() == author){
                libros.push(this.books[i])  
            }
        }
    return libros

};
}


let libro: Book = new Book("El Nombre del Viento", 872,
         "978-84-01-33720-8", "Patrick Rothfuss", "Plaza Janés");
let libro2: Book = new Book("Introduccion a Javascript", 233,
         "234433-BC23333","Joseph Smith", "Now Editions");


let biblioteca: Library = new Library([libro, libro2], 
                            "Calle falsa 123", "Celia");

//biblioteca.toString();
//console.log(biblioteca.getNumberOfBooks());
console.log(biblioteca.findByAuthor("Joseph Smith"));

