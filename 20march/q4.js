class employee{

    constructor(n,p,s){
        this.name=n;
        this.position=p;
        this.salary=s;
        
    }
    getSalary(){
        return`Salary:${this.salary}`
    }
}

let p= new employee("Shiv","SDE1",15000);

console.log(p.getSalary());