class car{
    
    constructor(c,m,y){
        this.company=c;
        this.model=m;
        this.year=y;
    }
    getDescription(){
        console.log(`This is ${this.company}  Modal ${this.model} year${this.year} `)
    }
}

let p= new car("mahindra","Bs3",2013);
p.getDescription();