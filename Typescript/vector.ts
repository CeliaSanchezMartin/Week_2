//Reto 8.
export class Vector {
    private elments: number [];
    n:number;
    k:number;

    constructor(n:number, k:number){
        this.n = n;
        this.k = k;
        this.elments = [];
        for ( let i = 1 ; i < n + 1 ; i ++){
            this.elments.push(Math.floor((Math.random() * k + 1)));
        };
    }

    //Métodos.

    public print():void{
        console.log(this.elments);
        
    };

    public add(v1:Vector): Vector{
        let vectorDevuelto:Vector = new Vector(0,0);
        for(let  i = 0; i < this.elments.length; i++){
        vectorDevuelto.elments.push(this.elments[i] + v1.elments[i])
    }
     return vectorDevuelto;
    };

    public subs(v1:Vector): Vector{
        let vectorDevuelto:Vector = new Vector(0,0);
        for(let  i = 0; i < this.elments.length; i++){
        vectorDevuelto.elments.push(this.elments[i] - v1.elments[i])
    }
     return vectorDevuelto 
    };

    public mult(v1:Vector): Vector{
        let vectorDevuelto:Vector = new Vector(0,0);
        for(let  i = 0; i < this.elments.length; i++){
        vectorDevuelto.elments.push(this.elments[i] * v1.elments[i])
    }
     return vectorDevuelto 
    };

    public multNumber(n:number): Vector{
        let vectorDevuelto:Vector = new Vector (0,0);
        for(let  i = 0; i < this.elments.length; i++){
          vectorDevuelto.elments.push(this.elments[i] * n)
    }
     return vectorDevuelto;
    };
};



