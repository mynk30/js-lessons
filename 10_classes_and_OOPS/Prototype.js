let myName = "mayank     ";
let myChannel = "chai     ";

// console.log(myName.trueLength);
// create method trueLength() to get the true length of the string

let myHeroes = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.mayank = function(){
    console.log(`mayank is present in all objects`);
};

Array.prototype.heyMayank = function(){
    console.log(`Mayank says hello`);
}

// Array method calling
// heroPower.mayank();
// myHeroes.mayank();
// myHeroes.heyMayank();

// object method calling
// heroPower.heyMayank();


// inheritance

const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User; // old approach

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"mayank".trueLength();
"iceTea".trueLength();