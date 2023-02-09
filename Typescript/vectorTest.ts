//Reto 9. Probar clase vector.
import { Vector } from "./vector";

let vector:Vector = new Vector (10,10);

vector.print();

let vector2:Vector = new Vector (10,10);
vector2.print();

console.log(vector.add(vector2));
console.log(vector.subs(vector2));
console.log(vector.mult(vector2));
