const name = "mayank";
const repoCount = 12;

// console.log(name + repoCount); // concatenate and display
// console.log(name , repoCount); // displays as separate values

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation

const gameName = new String('mayank-FC');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('F'));

const newStr = gameName.substring(0, 4);
console.log(newStr);

const anotherStr = gameName.slice(-9, 4);
// console.log(anotherStr);

const newStrOne = "    hitesh    ";
// console.log(newStrOne)
// console.log(newStrOne.trim()); // removes unwanted spaces


const url = "https://mayank.com/mayank%20soni";
// console.log(url.replace("%20", "-"));


// console.log(url.includes("mayank"));

// console.log(gameName.split("-"));