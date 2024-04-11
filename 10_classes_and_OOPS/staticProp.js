class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const mayank = new User("mayank");
// console.log(mayank.createId());


class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'i@phone.com');
// console.log(iphone);
// console.log(iphone.createId());

console.log(Teacher.createId());
// static methods are directily on class name and not form instance of the class