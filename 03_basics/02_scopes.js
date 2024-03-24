// var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested Scope
function one() {
    const username = "mayank";

    function two(){
        const website = "youtube.com";
        console.log(username);
    }
    // console.log(website);

    // two();
}

// one();

if(true) {
    const username = "mayank";
    if(username === "mayank") {
        const website = " youtube.com";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++ interesting ++++++++++++++++++++
console.log(addOne(5));

function addOne(num) {
    return num+1;
}



addTwo(5);

const addTwo = function (num) {
    return num + 2;
}
