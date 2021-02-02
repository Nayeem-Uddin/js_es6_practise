//let and const vs var fight

//if we declare any variable as const then we can't change it
//if we declare any variable as let then we can change it
//another facility to use let that is leak prove means it will execute inside the scope
//wherever var can be leaked we can call var from outside the function

// For example

// const bou = "sadia islam kanchi";
// bou = 'amr notun valobasha';
// console.log(bou);
//   TypeError: Assignment to constant variable. (it will give us this error means we can't change out bou means const)

// for array
// const numbers = [10,15,20];
// numbers.push(88);
// numbers[2] = 57;
// console.log(numbers);
// numbers = [12,3,4]
// console.log(numbers);      TypeError: Assignment to constant variable.

//we can work with the elements of array but we can't change the whole array


//for removing this problem we have 'let'
let bou = 'sadia islam kanchi';
bou = 'amr notun valobasha';
console.log(bou); //we can change the variable by using let

//another think also we have to put our brain about let and var
// example

let result = 0;
for(var i = 0 ; i<10; i++){
    result = result + i;
}
console.log(i); //it will print the value because of we are using var here. if we use let then - 


let result = 0;
for(let i = 0 ; i<10; i++){
    result = result + i;
}
console.log(i); //SyntaxError: Identifier 'result' has already been declared . (it will give us this error)

//so we can say that let can't be leaked outside the function but var can be leaked

