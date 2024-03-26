class student{
    name;
    
    constructor(name){
       this.name=name;
    }
    
    

}

student.prototype.printDetails=function(){
    console.log(`"helo,my name is" ${this.name}`)
}

let Student=new student("Mithun");
Student.printDetails();

