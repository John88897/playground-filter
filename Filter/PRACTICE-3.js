// Practice 3: Filter Strings
// Task: Keep only the fruits that have more than 5 letters.
// Expected output: ["banana", "cherry"]

const fruits = ["apple", "banana", "cherry", "date", "kiwi"];

// Your code here
const fru = fruits.filter(f => f.length >5) ;
console.log(fru);