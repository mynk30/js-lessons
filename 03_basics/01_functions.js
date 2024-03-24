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
console.log(loginUserMessage());
