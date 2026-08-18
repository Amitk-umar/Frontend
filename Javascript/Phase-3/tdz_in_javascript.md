# Temporal Dead Zone (TDZ) in JavaScript

The **Temporal Dead Zone (TDZ)** is a specific period in JavaScript execution where variables declared with `let` and `const` cannot be accessed. 

It starts when the code execution enters a block scope and ends exactly when the variable is declared and initialized. If you try to access the variable while it is in the TDZ, JavaScript throws a `ReferenceError`.

Here is a breakdown of how it works and why it exists.

## How the TDZ Works

In JavaScript, variable declarations are "hoisted" (moved to the top of their scope) before the code runs. However, `var`, `let`, and `const` handle this hoisting differently.

*   **`var`:** Hoisted and immediately initialized with `undefined`. You can access it before its declaration line without throwing an error.
*   **`let` and `const`:** Hoisted to the top of the block, but **not initialized**. The time between the start of the block and the actual line where the variable is defined is the Temporal Dead Zone.

### Example 1: The Basics

```javascript
console.log(age); // Output: undefined (no TDZ for var)
var age = 25;

console.log(name); // ReferenceError: Cannot access 'name' before initialization
let name = "Alice"; 
// The TDZ for 'name' existed from the top of this scope until this exact line.
```

### Example 2: Block Scope TDZ

The TDZ applies to any block scope (like inside an `if` statement or a `for` loop), not just the global scope.

```javascript
let score = 10;

if (true) {
  // TDZ for 'score' inside this block starts here
  console.log(score); // ReferenceError!
  
  let score = 50; // TDZ ends here
}
```
Even though there is a global `score` variable, the `let score = 50` inside the `if` block is hoisted to the top of that specific block, creating a new TDZ. It shadows the outer variable, causing the `console.log` to fail.

---

## The `typeof` Trap

Before ES6 (when `let` and `const` were introduced), using `typeof` on an undeclared variable was perfectly safe—it just returned `"undefined"`. With the TDZ, `typeof` is no longer fully safe.

```javascript
console.log(typeof undeclaredVar); // Output: "undefined"

console.log(typeof myLetVar); // ReferenceError! (Inside the TDZ)
let myLetVar = "Hello";
```

## Why does the TDZ exist?

1.  **To catch errors:** Accessing a variable before it is initialized is almost always a bug. The TDZ forces you to write cleaner, more predictable code by declaring variables before using them.
2.  **To make `const` work:** A `const` variable must be given a value when it is created, and that value cannot change. If `const` behaved like `var` (starting as `undefined`), it would mean the constant was temporarily `undefined` and then changed to its actual value, breaking the rule of a constant.
