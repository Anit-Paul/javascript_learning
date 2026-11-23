
let myDate = new Date();
//console.log(myDate.toDateString());
//console.log(myDate.toTimeString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());

//console.log(typeof myDate); //object


let myCreatedDate= new Date(2026,23,30);
console.log(myCreatedDate.toDateString());

console.log(Math.floor(Date.now()/1000)); //milliseconds since 1970

console.log({year: myDate.getFullYear(), month: myDate.getMonth()+1 , day: myDate.getDate()});