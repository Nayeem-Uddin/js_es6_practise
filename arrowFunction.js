//Power of arrow function

function add(num1,num2){
    return num1+num2;
}
const result = add(10,10);
console.log(result);

//make it more better to look and reduce the code

// ES6:
const result2 = (num1,num2) => {
    return num1+num2;
}
console.log(result2(20,30));


const nothing = ()=> 'amr kono valobasha nai';
console.log(nothing())