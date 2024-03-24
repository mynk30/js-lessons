const user = {
    username: "mayank",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "user1";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username= "mayank";
//     console.log(this);
//     console.log(this.username); // undefined
// }

// chai();

// Arrow functions ---->

const chai = () => {
    let username = "mayank";
    console.log(this);
    // console.log(this.username);
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// } // EXPLICIT RETURN

// const addTwo = (num1, num2) => num1 + num2; // IMPLICIT RETURN

// const addTwo = (num1, num2) => (num1 + num2); // IMPLICIT RETURN

const addTwo = (num1, num2) => ({username: "mayank"}); // IMPLICIT RETURN


console.log(addTwo(3, 5));

const myArray = [2, 5, 3, 7, 8];
// use of arrow function
// myArray.forEach(function() {})
// myArray.forEach(() => {})
// myArray.forEach(() => ()))