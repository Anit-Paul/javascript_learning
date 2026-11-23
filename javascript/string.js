const name="anit"
const repoCount=50
temp=`my name is ${name} and my repo count is ${repoCount}`
console.log(temp.substring(1,5));
console.log(typeof(temp.split(" "))); // [ 'my', 'name', 'is', 'anit', 'and', 'my', 'repo', 'count', 'is', '50' ]
arr=[1,2,3,4,5]
console.log(arr.slice()); // [ 2, 3 ]
console.log(typeof(arr)); // object

str=" hello world  "
console.log(str.trim()); // hello world
console.log(str.replace('o','e')); // hello world
console.log(str)