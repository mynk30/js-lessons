// Immediately Invoked Function Expression (IIFE)

// function likha aur immediately run ho jaye
// 1. like db file
// 2. global variables dont pollute function scope

(function chai() {
    // this is name IIFE
    console.log('DB CONNECTED');
})();

// () -> first parenthesis definition
// () -> second parenthesis function call
// ()() -> this is iife

( (name)=>{
    // SIMPLE IIFE OR UNNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh');