# JavaScript Errors: SyntaxError, ReferenceError, and TypeError

In JavaScript, errors are thrown when the engine encounters a problem it cannot resolve. The three most common types of errors you will encounter are **ReferenceError**, **SyntaxError**, and **TypeError**. 

Here is a breakdown of what each error means, why it happens, and how to fix it.

---

## 1. SyntaxError

A **SyntaxError** happens when your code violates the grammar rules of the JavaScript language. Because the engine cannot understand the code, this error is thrown during the **parsing phase**—meaning the script will fail before it even starts executing.

### Common Causes
*   Missing parentheses `()`, curly braces `{}`, or square brackets `[]`.
*   Missing or mismatched quotes around strings.
*   Using reserved keywords incorrectly.

### Example

```javascript
// Missing the closing parenthesis for the if condition
if (true {
  console.log("Hello!");
} 
// Uncaught SyntaxError: Unexpected token '{'
```

---

## 2. ReferenceError

A **ReferenceError** occurs during the **execution phase** when your code attempts to access a variable or function that does not exist in the current scope, or has not been initialized yet.

### Common Causes
*   Misspelling a variable name.
*   Trying to access a variable outside of its block or function scope.
*   Accessing a `let` or `const` variable before its declaration (entering the **Temporal Dead Zone**).

### Example

```javascript
// 1. Accessing an undeclared variable
console.log(username); 
// Uncaught ReferenceError: username is not defined

// 2. Scope issues
function greet() {
  let message = "Hi!";
}
console.log(message); 
// Uncaught ReferenceError: message is not defined (it only exists inside the function)
```

---

## 3. TypeError

A **TypeError** occurs during the **execution phase** when a value is not of the expected type for the operation you are trying to perform. The variable exists (so it is not a ReferenceError), but you are using it in a way that JavaScript does not allow.

### Common Causes
*   Trying to call a variable that is not a function (e.g., calling a number or string).
*   Attempting to read or write properties on `null` or `undefined`.
*   Trying to reassign a new value to a `const` variable.

### Example

```javascript
// 1. Calling a non-function
const age = 30;
age(); 
// Uncaught TypeError: age is not a function

// 2. Reading a property of null
const user = null;
console.log(user.name); 
// Uncaught TypeError: Cannot read properties of null (reading 'name')

// 3. Reassigning a constant
const PI = 3.14;
PI = 3.14159; 
// Uncaught TypeError: Assignment to constant variable.
```

---

## Summary Comparison

| Error Type | When it occurs | Core Issue | Example Scenario |
| :--- | :--- | :--- | :--- |
| **SyntaxError** | Parsing phase | Broken language grammar | Missing a closing `}` on a function. |
| **ReferenceError** | Execution phase | Variable does not exist (or isn't accessible) | Misspelling a variable name. |
| **TypeError** | Execution phase | Wrong data type for the operation | Trying to use `.toUpperCase()` on a number. |
