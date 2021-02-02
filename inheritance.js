class Father{
    constructor(){
        this.fatherName = 'Golam Mostafa';
    }
}

class Child extends Father{
    constructor(name){
        super()
        this.name = name;
    }
    getFullName(){
        return this.fatherName+" "+this.name
    }
}
const baby = new Child('nayeem');
console.log(baby.getFullName());
console.log(baby.name);
console.log(baby.fatherName);