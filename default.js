// for backup the arguments number inside the fucntion parameter we can use default

// function name(hubby, wifie) {
//     return hubby + wifie;
// }
// const couple = name('nayeem');
// console.log(couple); //what the hell I forgot to put my wifiee name what I can I do now >>>?
//ES6 : I have a simple solution man just follow me

function name(hubby, wifie='sadia') {
    return hubby + wifie;
}
const couple = name('nayeem','kanchi');
console.log(couple);
