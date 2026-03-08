1️⃣ qus:1 => What is the difference between var, let, and const?


ans => 

var is function-scoped, meaning it leaks outside of blocks like if or for. let and const are block-scoped — they stay inside {}.
​

js
if (true) {
  var a = 1;   // accessible outside
  let b = 2;   // NOT accessible outside
  const c = 3; // NOT accessible outside
}

console.log(a); // ✅ 1
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceErrorvar is function-scoped, meaning it leaks outside of blocks like if or for. let and const are block-scoped — they stay inside {}.
​

js
if (true) {
  var a = 1;   // accessible outside
  let b = 2;   // NOT accessible outside
  const c = 3; // NOT accessible outside
}

console.log(a); // ✅ 1
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError


2️⃣ qus:2 => What is the spread operator (...)?


ans =>

The spread operator (...) expands an iterable — like an array or object — into individual elements.

const arr = [1, 2, 3];
const copy = [...arr]; // [1, 2, 3] — new copy, not a reference

const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b]; // [1, 2, 3, 4, 5, 6]


3️⃣ qus:3 => What is the difference between map(), filter(), and forEach()?


ans =>

map() → you need a new transformed array
​

filter() → you need a subset of the array
​

forEach() → you don't need a return value, just want to loop
​

Because map() and filter() return arrays, they can be chained together. forEach() cannot since it returns undefined.
​
const nums = [1, 2, 3, 4, 5];

nums
  .filter(n => n % 2 === 0)  // [2, 4]
  .map(n => n * 10);          // [20, 40]


4️⃣ qus:4 => What is an arrow function?


ans =>

An arrow function is a shorter, cleaner way to write functions in JavaScript using the => syntax.An arrow function is a shorter, cleaner way to write functions in JavaScript using the => syntax.

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function — same thing, less code
const add = (a, b) => a + b;


5️⃣ qus:5 => What are template literals?

ans =>

Template literals are strings wrapped in backticks (`) instead of quotes, allowing you to embed variables, expressions, and write multi-line strings cleanly.

const name = "Alice";
const age = 25;

// Old way ❌ messy
"Hello, " + name + "! You are " + age + " years old.";

// Template literal ✅ clean
`Hello, ${name}! You are ${age} years old.`;
