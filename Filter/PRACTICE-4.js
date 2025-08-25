// Practice 4: Filter Objects by Property
// Task: Filter the users who are active.
// Expected output:
// [
//   { name: "Alice", active: true },
//   { name: "Charlie", active: true }
// ]

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true }
];

// Your code here

const named = users.filter(n => n.active==true);
console.log(named);