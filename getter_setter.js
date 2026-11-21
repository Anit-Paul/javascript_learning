class User {
    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

const user = new User("anit@infosys.com");

console.log(user.email);

user.email = "anit@gmail.com";

console.log(user.email);
console.log(user._email)