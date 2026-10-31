//let score=50 //number 50
let score="33abc";
let myVal=Number(score); //NaN
console.log(typeof myVal); //number 

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

let isLoggedIn=true;
console.log(typeof isLoggedIn); //boolean
console.log(Number(isLoggedIn)); //1