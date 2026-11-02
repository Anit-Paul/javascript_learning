
const mySym = Symbol("mySym");

const obj = {
    name: "anit",
    age: 21,
    [mySym]: "mySymbol"
};

console.log(obj.name)
console.log(obj["name"])
console.log(obj[mySym])

console.log(obj)

/*Object.freeze(obj); //freeze the object so that it cannot be modified
obj["name"]="new name"; //this will not work as the object is frozen

console.log(obj) //will still print "anit" as the object is frozen
*/

//for freezing only specosic key
Object.defineProperties(
    obj,
    {
        name: {
            writable: false,
        }
    }
)

obj["name"] = "new name"; //this will not work as the object is frozen

console.log(obj) //will still print "anit" as the object is frozen

obj.greetings = function() {
    console.log("Hello, my name is " + this.name);
}

console.log(obj.greetings)