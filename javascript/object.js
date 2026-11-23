// change any object 

obj=Object.getOwnPropertyDescriptor(Math,'PI')

Object.defineProperties(obj,{
    value:{
        writable:false
    },
    writable:{
        writable:true
    }
});

obj.value=100;
obj.writable=200
console.log(obj)