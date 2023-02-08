//Reto 4. Crear la clase book.

export class Book {
    //Constructor con atributos como parametros.
    constructor (private title: string, 
        private nPages:number,
        private isbn: string,
        private author: string,
        private editorial: string,
        ){}
    //Métodos
    //Getters
    public getTitle():string{
        return this.title
    }
    public getNPages():number{
        return this.nPages
    }
    public getIsbn():string{
        return this.isbn
    }
    public getAuthor():string{
        return this.author
    }
    public getEditorial():string{
        return this.editorial
    }

    //Setters.
    public setTitle(newTitle:string): void{
        this.title = newTitle;
    };
    public setnPages(newPages:number): void{
        this.nPages = newPages;
    };
    public setIsbn(newIsbn:string): void{
        this.isbn = newIsbn;
    };
    public setAuthor(newAuthor:string): void{
        this.author = newAuthor;
    };
    public setEditorial(newEditorial:string): void{
        this.editorial = newEditorial;
    };

    //Método Público.tostring.
    public toString(): string{
        return "Title - " + this.title +
               "\nNumber os Pages - " + this.nPages +
               "\nISBN - " + this.isbn + 
               "\nAuthor - " + this.author + 
               "\nEditorial - " + this.editorial 
    }

};