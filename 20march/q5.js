class person{
    constructor(name="unknown",age=0){
       
            this.name=name;
            this.age=age;
   
        
    }

    getDetials(){
        
       return `Name: ${this.name}, Age: ${this.age}`; 
    }
}

const person1= new person("shiv",23);
console.log(person1.getDetials());
const person2= new person();
console.log(person2.getDetials());
