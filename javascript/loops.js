/*arr=[1,2,3,4,5,"anit"]

//for of
for(let value of arr){
    console.log(value);
}

//for in
for(let index in arr){
    console.log(arr[index]);
}

//forEach
arr.forEach(function(value, index) {
    console.log(`Index: ${index}, Value: ${value}`);
});
*/
let obj = new Map();
obj.set("name", "anit");
obj.set("age", 21);
obj.set("city", "New York");

//console.log(obj);

/*for(let [key,value] of obj){
    console.log(key, value);
}


//checking for obj
const mySym=Symbol("mySymbol");
const my_obj = {
    name: "anit",
    age: 21,
    [mySym]: "mySymbol"
};

for(let [key,value] of Object.entries(my_obj)){
    console.log(key, value);
}

for(key in my_obj){
    console.log(key, my_obj[key]);
}*/

obj.forEach((key,value)=>{
    //console.log(key, value);
})


let arr = [1, 2, 3, 4, 5]

console.log(arr.filter((value)=>{
    return value%2==0;
}));


console.log(arr.map((value)=>{
    return value*2;
}));

let initialValue = 0;
console.log(arr.reduce((accumulator,cur)=>{
    console.log(accumulator,cur);
    return accumulator+cur;
},initialValue));
