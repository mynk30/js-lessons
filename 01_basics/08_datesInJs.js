// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCeratedDate = new Date(2023, 0, 23);
// let myCeratedDate = new Date(2023, 0, 23, 5, 3);
let myCeratedDate = new Date("01-14-2023");
// console.log(myCeratedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCeratedDate.getTime());
// console.log(Math.floor((Date.now()/1000)));

let newDate = new Date();

console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
});