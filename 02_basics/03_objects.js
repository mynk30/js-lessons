// singleton -> made from constructor 
// Object.create

// object 

const mySym = Symbol("key1");

const Jsuser = {
    name: "mayank",
    "full name": "mayank soni",
    [mySym]: "mykey1",
    age: 23,
    location: "indore", 
    email: "mayank@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}; // this is object

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "mayank@chatgpt.com";
// Object.freeze(Jsuser);
Jsuser.email = "mayank@microsoft.com";
console.log(Jsuser);


Jsuser.greeting = function() {
    console.log("Hello i am a function");
};
Jsuser.greeting2 = function() {
    console.log(`Hello js user, ${this.name}`);
};

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());