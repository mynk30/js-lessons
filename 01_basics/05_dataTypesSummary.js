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

console.log(typeof anotherId);
// https://262.ecma-international.org/5.1/#sec-11.4.3