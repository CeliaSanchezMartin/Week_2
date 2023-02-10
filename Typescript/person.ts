//Reto 1. Clase Person
export class Person {
    
    public name: string;
    public age: number;
    private adress: string;

    constructor (name:string, age:number, adress:string){

        this.name = name;
        this.age = age;
        this.adress = adress;

    };
    //Setters
    public setAdress(adress:string):void{
        this.adress = adress;
    };
    //Getters
    public getAddress():string{
       return this.adress;
    };
    //Métodos
    public printName():void{
        console.log(this.name);
        
    }

    public yearOfBirth(currentYear: number):number{
        return currentYear -this.age;
    }

};


