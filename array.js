const myArray = [1, 2, 3, 4, 5, "anit",true,null,undefined];
//console.log(myArray.length);
//console.log(myArray[0]);

myArrray2=myArray;

myArrray2[0]=100;
//console.log(myArray[0]); //100

//deep copy
myArray3=new Array(...myArray);
myArray3[0]=200;
//console.log(myArray[0]);

myArray3.push("new value");
myArray3.pop();


//console.log(myArray3)
const temp=myArray3.join();
//console.log(temp);

//console.log(myArray.slice(1,3));
//console.log(myArray)
//console.log(myArray.splice(1,3));
//console.log(myArray)



