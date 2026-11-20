/*data={
    name:"anit",
    profession:"specalist programmer",
    greetings:function (){
        console.log(`hello ${this.name}, a ${this.profession}`)
        console.log(this)
    }
};

console.log(this)
data.greetings();*/


/*
1. when we use new an empty instance will be created
2. for new a constructor function will be called
3. things will be addes/updated in this
4. this will be returned
*/ 

class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    };
    greetings(){
        console.log(`hello ${this.name}, a ${this.age} year old guy`)
        console.log(this)
    }
};

user1=new User("anit",21);
user2=new User("rohan",22);
user3=new Number(5)
console.log(user3 instanceof(User))
user1.greetings();
user2.greetings();

//static function

class Amazon{
    static greetings(){
        console.log("welcome to amazon!");
    }
};

temp=new Amazon();
Amazon.greetings();
