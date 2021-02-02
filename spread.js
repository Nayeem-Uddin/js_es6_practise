//Lets start play with the power of spread

const numbers1 = [1,3,5,6];
const numbers2 = [12,34,35,16];
const numbers3 = [134,366,577,126];
const result = numbers1+numbers2+numbers3;
//or
const result2 = numbers1.concat(numbers2).concat(numbers3);
//now make it more interesting
const result3 = [...numbers1,...numbers2,5,...numbers3]
console.log(result3);

const nayeem = 500;
const sadia = 300;
const kanchi = 900;
const result4 = Math.max(nayeem,sadia,kanchi);
const totalTaka = [500,300,900]
// const result5 = Math.max(totalTaka);
const result5 = Math.max(...totalTaka); //the power of spread
const result6 = Math.min(...totalTaka);
console.log(result6)