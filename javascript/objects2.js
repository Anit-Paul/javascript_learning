const obj1 = {
    name: "anit",
    age: 21,
    mySym: "mySymbol"
};

const obj2 = {
    dept : "CSE",
    "greetings" : function() {
        console.log("Hello, my name is " + this.name);
    }
};

const obj3={...obj1,...obj2};
console.log(obj3)

const obj4=Object.assign({},obj1,obj2);
console.log(obj4)

const {name, age, dept:d} = obj3;
console.log(name, age, d)