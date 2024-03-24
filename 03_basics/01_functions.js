function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    console.log("K");
}

// sayMyName // function reference
// sayMyName(); // function execute

// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5); // arguments
// console.log("result: ", result); 


function addTwoNumbers(number1, number2) { // parameters
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

// const result = addTwoNumbers(3, 5); // arguments
// console.log("result: ", result); 

function loginUserMessage(username = "sam") {
    if(!username)  {
        console.log("Please enter a username");
        return;
    }
 
    return `${username} just logged in.`;
}

// console.log(loginUserMessage("mayank"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) { // rest operator
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "mayank",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "user",
    price: 399
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[0];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([300, 500, 600]));
