const userEmail = [];

// if (1) {
//     console.log("Got user email");
// }
// else {
//     console.log("Dont have user email");
// }

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// true, '0', 'false', ' ', [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {};

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80')