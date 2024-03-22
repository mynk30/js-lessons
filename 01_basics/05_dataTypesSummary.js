// Primitive Data Type
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined;

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 1423928789343n
// console.log(typeof bigNumber);

// Dynamically Typed;



// Non - Primitive / Reference Data Types
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "mayank",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
};

// console.log(typeof anotherId);
// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++ Stack and Heap+++++++++++++++++++++ 
// Stack (Primitive), Heap (Non-primitive)

let fullName = "mayankSoni";
let anotherFullName = fullName;
console.log(fullName);
console.log(anotherFullName);

anotherFullName = "chaiaurcode";
console.log(fullName);
console.log(anotherFullName);

let userOne = {
    email: 'user@google.com',
    upi: "user@ybl",
}

let userTwo = userOne
console.log(userOne)
console.log(userTwo)

userTwo.email = "mayank@google.com";
console.log(userOne.email)
console.log(userTwo.email)