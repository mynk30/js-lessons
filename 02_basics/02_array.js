const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(dc_heroes);
// console.log(marvel_heroes[3][1]);

// let allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// spread
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_new_heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);

// console.log(Array.isArray("Mayank"))
// console.log(Array.from("Mayank"))
console.log(Array.from({name: "mayank"})) // interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// Array -> .is / .of / .from