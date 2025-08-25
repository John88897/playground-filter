// Practice 5: Filter by Index
// Task: Use filter() to keep only elements at even indices.
// Expected output: [10, 30, 50]

const numbers = [10, 20, 30, 40, 50];

// Your code here
const even = numbers.filter((e, index)=> (index%2==0));
console.log(even);