//let score=50 //number 50
let score="33abc";
let myVal=Number(score); //NaN
console.log(typeof myVal); //number 

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

let isLoggedIn=true;
console.log(typeof isLoggedIn); //boolean
console.log(Number(isLoggedIn)); //1


console.log(1+"1"); //11
console.log(1+2+"2"); //32
console.log(1+"2"+2); //122
console.log(1+2+3+"4"); //64

// === strict equality operator
console.log(1==="1"); // false
console.log(1=="1"); // true

let id=Symbol(123);
let id2=Symbol(123);
console.log({id,id2}); // { id: Symbol(123), id2: Symbol(123) }
console.log(id===id2); // false