

if(true){
    let a=10;
    const b=20;
    var c=30; //it remains in the global scope even if it is declared inside a block
}

console.log(c);


user={
    name:"John",
    age:30,
    city:"New York",
    greetings:function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(this);
    }
}

user.greetings();
console.log(this); //this refers to the global object in this context


//IIFE : Immediately Invoked Function Expression
(function(){
    console.log("This is an IIFE");
})();

(function(){
    console.log("This is an IIFE2");
})();