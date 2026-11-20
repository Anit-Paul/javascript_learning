function setName(username){
    this.username=username;
};

function createUser(username,age){
    setName.call(this,username); //by call passing the current execution context
    this.age=age;
    return this;
}

console.log(new createUser("anit",21));