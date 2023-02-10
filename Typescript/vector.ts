//Reto 8.
export class Vector {
    private elements: number [];
    

    constructor(n:number, k:number){
        this.elements = [];
        for ( let i = 1 ; i < n + 1 ; i ++){
            this.elements.push(Math.floor((Math.random() * k + 1)));
        };
    }

    //Métodos.
    public getElement(): number[]{
        return this.elements
    };

    public setElements(newElement:number[]): void{
        this.elements = newElement
    };

    public print():void{
        console.log(this.elements);
        
    };

    public add(v1:Vector): Vector{
        let vectorDevuelto:Vector = new Vector(0,0);
        let v1Param:number[] = v1.getElement();
        if(this.elements.length == v1Param.length){
        for(let  i = 0; i < this.elements.length; i++){
        vectorDevuelto.elements.push(this.elements[i] + v1.elements[i])
    }}
     return vectorDevuelto;

    };

    public subs(v1:Vector): Vector{
        let vectorDevuelto:Vector = new Vector(0,0);
        for(let  i = 0; i < this.elements.length; i++){
        vectorDevuelto.elements.push(this.elements[i] - v1.elements[i])
    }
     return vectorDevuelto 
    };

    public mult(v1:Vector): Vector{
        let vectorDevuelto:Vector = new Vector(0,0);
        for(let  i = 0; i < this.elements.length; i++){
        vectorDevuelto.elements.push(this.elements[i] * v1.elements[i])
    }
     return vectorDevuelto 
    };

    public multNumber(n:number): Vector{
        let vectorDevuelto:Vector = new Vector (0,0);
        for(let  i = 0; i < this.elements.length; i++){
          vectorDevuelto.elements.push(this.elements[i] * n)
    }
     return vectorDevuelto;
    };
};



