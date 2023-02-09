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

    public setAdress(adress:string):void{
        this.adress = adress;
    }

    public getAddress():string{
       return this.adress;
    }
    public printName():void{
        console.log(this.name);
        
    }

    public yearOfBirth(currentYear: number):number{
        return currentYear -this.age;
    }

};


