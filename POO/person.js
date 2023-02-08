//Retos dia 7. Programación orientada a objetos.
//Reto 1Crea Person.
//Reto 2 calcula IMC
//Reto 3. Calcular año nacimiento.
class Person{
    constructor(altura, peso, yearOfBirth, hobbies){
        this.altura = altura
        this.peso = peso
        this.yearOfBirth = yearOfBirth
        this.hobbies =  hobbies


    };
    calcIMC(){
        return this.peso / (this.altura * this.altura)
    };

    calcEdad(year){
        return year - this.yearOfBirth
    };

    printAll(){
           console.log(  "altura - " + this.altura + " peso - " + this.peso + " yearOfBirth - " + this.yearOfBirth + " hobbies - " + this.hobbies);
    }
    printHob(){
        for (let i = 0; i < this.hobbies.length; i++) {
            console.log(this.hobbies[i]);
        }
    }

};
let pepe = new Person (1.69, 60);


module.exports = {Person}