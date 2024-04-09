// fetch('https://something.com').then().catch().finally();

const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
})


new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@example.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})

const prmoseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) resolve({ username: "mayank", password: "123" })
        else reject('ERROR SOMETHING WENT WRONG');
    }, 1000);
})

prmoseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function (err) {
    console.log(err);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) resolve({ username: "javaScript", password: "123" })
        else reject('ERROR js WENT WRONG');
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log('Error: ', error);
//     }

    
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("Error: ", error);
})