// ES6

/*
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User('chai', 'chai@fb.com', '123');
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// console.log(typeof User);
*/


// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


User.prototype.encryptPassword = function() {
    return `${this.password}abc`;   
}
User.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const tea = new User ("tea", "tea@gmail.com", "123");

console.log(tea.encryptPassword());
console.log(tea.changeUserName());