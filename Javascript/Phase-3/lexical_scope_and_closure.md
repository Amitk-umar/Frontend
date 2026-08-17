# Lexical Scope and Closure in JavaScript

To understand closures, you first need to understand lexical scope. They are two halves of the same coin: **lexical scope is the rule**, and **closure is the feature** that takes advantage of that rule.

Here is the breakdown of how they work.

---

## 1. Lexical Scope (The Rule)

**Lexical scope** means that the accessibility of variables is determined by where they are physically written in your source code. 

Think of nested functions like a set of one-way glass rooms. An inner function can "see" the variables in its outer parent functions, but a parent function cannot "see" inside its child functions.

```javascript
const globalVar = "I am global";

function outerFunction() {
  const outerVar = "I am outside";

  function innerFunction() {
    const innerVar = "I am inside";
    
    // innerFunction can see its own scope, its parent's scope, and the global scope
    console.log(innerVar);  // Works
    console.log(outerVar);  // Works
    console.log(globalVar); // Works
  }

  innerFunction();
  
  // outerFunction CANNOT see inside innerFunction
  // console.log(innerVar); -> ReferenceError: innerVar is not defined
}

outerFunction();
```

The JavaScript engine knows exactly what variables `innerFunction` has access to before the code even runs, purely based on where you typed the brackets.

---

## 2. Closure (The Feature)

A **closure** happens when a function "remembers" its lexical scope even when that function is executed entirely outside of that scope.

Normally, when a function finishes running, its local variables are destroyed by the garbage collector. But if you return a function from inside another function, the inner function takes a "backpack" of the variables it needs from its parent's scope. 

```javascript
function createCounter() {
  let count = 0; // This variable is in the parent scope

  // We return the inner function, which creates a closure
  return function increment() {
    count++; 
    console.log(count);
  };
}

// createCounter runs and finishes. 
// Normally, 'count' would be destroyed here.
const myCounter = createCounter();

// But myCounter (which is the inner 'increment' function) still remembers 'count'!
myCounter(); // Logs: 1
myCounter(); // Logs: 2
myCounter(); // Logs: 3
```

Even though `createCounter` finished executing lines ago, `myCounter` still has private access to the `count` variable. 

---

## Why are Closures Useful?

You use closures all the time in JavaScript, often without realizing it. Here are the three most common use cases:

### 1. Data Privacy (Encapsulation)
In the counter example above, there is absolutely no way to access or modify the `count` variable directly from the outside. The only way to interact with it is through the function we provided. This prevents other parts of your code from accidentally overwriting important data.

### 2. Function Factories
You can use closures to create multiple functions with specific preset configurations.

```javascript
function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeter("Hello");
const sayHowdy = createGreeter("Howdy");

sayHello("Alice"); // "Hello, Alice!"
sayHowdy("Bob");   // "Howdy, Bob!"
```

### 3. Callbacks and Event Listeners
Whenever you set a timeout or attach an event listener, you rely on closures to remember the surrounding state when the event finally triggers.

```javascript
function attachHandler(elementId, message) {
  // The click listener is a closure. It remembers 'message' 
  // long after attachHandler has finished running.
  document.getElementById(elementId).addEventListener('click', function() {
    alert(message);
  });
}
```
