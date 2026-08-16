# How JavaScript Works Under the Hood

JavaScript looks simple when we write:

```js
console.log("Hello");
```

But internally, a lot of things happen before `"Hello"` appears in the console.

To understand JavaScript deeply, we need to understand:

- JavaScript Engine
- Execution Context
- Call Stack
- Memory Heap
- Global Execution Context
- Hoisting
- Scope
- Lexical Environment
- Closures
- Event Loop
- Web APIs
- Callback Queue
- Microtask Queue
- Promises
- Async/Await
- Garbage Collection

---

# 1. What Is JavaScript?

JavaScript is a **high-level, dynamically typed, single-threaded programming language**.

JavaScript itself does not directly understand our code.

For example:

```js
let a = 10;
let b = 20;

console.log(a + b);
```

The JavaScript engine takes this source code and processes it so the computer can execute it.

Popular JavaScript engines include:

| Environment | JavaScript Engine |
|---|---|
| Google Chrome | V8 |
| Node.js | V8 |
| Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Microsoft Edge | V8 |

For learning purposes, we will mainly use the **V8 engine** as an example.

---

# 2. What Happens When JavaScript Runs?

When we run JavaScript, the engine roughly performs these steps:

```text
JavaScript Code
      ↓
Parsing
      ↓
AST (Abstract Syntax Tree)
      ↓
Compilation
      ↓
Execution
      ↓
Machine Code
```

Modern JavaScript engines use techniques such as:

- Parsing
- Interpretation
- Just-In-Time (JIT) compilation
- Optimization

The exact internal implementation differs between engines, but the overall idea is that source code is transformed into something the machine can execute efficiently.

---

# 3. JavaScript Engine

A JavaScript engine is a program that understands JavaScript.

For example:

```js
const name = "Amit";

console.log(name);
```

The engine has to:

1. Read the code.
2. Understand the syntax.
3. Create internal structures.
4. Execute the instructions.
5. Manage memory.
6. Handle function calls.
7. Coordinate asynchronous operations through the surrounding runtime.

---

# 4. Parsing

The first major step is **parsing**.

Consider:

```js
let age = 22;
```

The engine analyzes the structure of this code.

It checks things like:

- Is `let` valid?
- Is `age` a valid identifier?
- Is `22` a valid value?
- Is the syntax correct?

The parser creates an internal representation called an:

# Abstract Syntax Tree (AST)

For example:

```js
let age = 22;
```

Conceptually becomes something like:

```text
VariableDeclaration
      |
      └── age
          |
          └── 22
```

The actual AST is much more detailed, but this simplified structure helps understand the idea.

---

# 5. Compilation

Modern JavaScript engines do not simply execute the source text directly.

They perform compilation and optimization.

A simplified model is:

```text
Source Code
     ↓
Parser
     ↓
AST
     ↓
Bytecode / Internal Representation
     ↓
Execution
     ↓
Optimization
     ↓
Optimized Machine Code
```

V8, for example, uses components such as:

- Ignition
- TurboFan

Ignition is associated with bytecode execution, while TurboFan performs optimization and generates optimized machine code.

---

# 6. JavaScript Is Single-Threaded

One of the most important concepts is:

> JavaScript execution is single-threaded.

That means JavaScript code normally runs one piece of JavaScript at a time on a single main execution thread.

For example:

```js
console.log("A");
console.log("B");
console.log("C");
```

Execution happens in this order:

```text
A
↓
B
↓
C
```

JavaScript doesn't execute all three statements simultaneously on the same execution thread.

---

# 7. What Is the Call Stack?

The **Call Stack** keeps track of function execution.

Example:

```js
function one() {
  console.log("One");
}

function two() {
  one();
  console.log("Two");
}

two();
```

The call stack behaves approximately like this:

```text
Initially
┌───────────┐
│           │
└───────────┘
```

Then:

```text
two()
┌───────────┐
│   two     │
└───────────┘
```

Then `two()` calls `one()`:

```text
┌───────────┐
│   one     │
├───────────┤
│   two     │
└───────────┘
```

After `one()` finishes:

```text
┌───────────┐
│   two     │
└───────────┘
```

After `two()` finishes:

```text
┌───────────┐
│           │
└───────────┘
```

The stack follows:

> **LIFO — Last In, First Out**

---

# 8. Stack Overflow

Because the call stack has limited capacity, too many nested function calls can cause an error.

Example:

```js
function test() {
  test();
}

test();
```

The function keeps calling itself.

Eventually:

```text
RangeError: Maximum call stack size exceeded
```

This is called a **stack overflow**.

---

# 9. Execution Context

An **Execution Context** is the environment in which JavaScript code is evaluated.

The major execution contexts are:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context

In normal JavaScript development, the first two are the most important.

---

# 10. Global Execution Context

When JavaScript starts executing a script, it creates the **Global Execution Context**.

Example:

```js
var name = "Amit";

function greet() {
  console.log("Hello");
}
```

Before normal execution begins, the engine prepares the global environment.

Conceptually:

```text
Global Execution Context

┌────────────────────────────┐
│ Variable / Environment     │
│                            │
│ name → "Amit"              │
│ greet → function           │
└────────────────────────────┘
```

The global context stays available while the global script is running.

---

# 11. Execution Context Has Two Important Phases

A useful learning model is:

### Phase 1: Creation / Setup

The engine prepares bindings, scope information, and other execution state.

### Phase 2: Execution

The code is executed statement by statement.

Example:

```js
console.log(x);

var x = 10;
```

This produces:

```text
undefined
```

Why?

Because `var x` is created during the setup phase, but its assignment happens during execution.

Conceptually:

```text
Creation:
x → undefined

Execution:
console.log(x) → undefined
x = 10
```

---

# 12. Hoisting

Hoisting is the behavior where declarations are processed before the corresponding code executes.

Example:

```js
console.log(a);

var a = 10;
```

Result:

```text
undefined
```

It is useful to imagine:

```js
var a;

console.log(a);

a = 10;
```

However, this is a simplified mental model rather than a literal rewriting of your source code.

---

# 13. `let` and `const`

Consider:

```js
console.log(a);

let a = 10;
```

This causes:

```text
ReferenceError
```

The declaration exists in the environment, but the variable cannot be accessed before its initialization.

This period is called the:

# Temporal Dead Zone (TDZ)

Example:

```js
{
  console.log(a);

  let a = 10;
}
```

The access occurs before initialization, so JavaScript throws a `ReferenceError`.

---

# 14. Memory Heap

JavaScript needs memory to store values and objects.

A simplified model divides memory management into:

```text
Call Stack
Memory Heap
```

The **heap** is used for dynamically allocated data such as objects, arrays, and functions.

Example:

```js
const user = {
  name: "Amit",
  age: 22
};
```

Conceptually:

```text
Stack
┌────────────────────┐
│ user ──────────────┼──────────┐
└────────────────────┘          │
                                ↓
                             Heap
                        ┌──────────────┐
                        │ name: Amit   │
                        │ age: 22      │
                        └──────────────┘
```

This is a simplified conceptual model. JavaScript engines optimize storage internally in more complex ways.

---

# 15. Primitive vs Reference Values

JavaScript has primitive values such as:

```js
string
number
bigint
boolean
undefined
symbol
null
```

And objects such as:

```js
object
array
function
```

Example:

```js
let x = 10;
let y = x;

y = 20;

console.log(x);
```

Output:

```text
10
```

`x` and `y` have independent primitive values.

Now:

```js
let user1 = {
  name: "Amit"
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
```

Output:

```text
Rahul
```

Why?

Both variables refer to the same object.

Conceptually:

```text
user1 ───────┐
             ↓
          ┌───────────┐
          │ name      │
          │ "Rahul"   │
          └───────────┘
             ↑
user2 ───────┘
```

---

# 16. Scope

Scope determines where a variable can be accessed.

Example:

```js
let globalName = "Amit";

function test() {
  let localName = "Rahul";

  console.log(globalName);
  console.log(localName);
}

test();
```

Inside `test()`:

```text
globalName → accessible
localName  → accessible
```

Outside:

```js
console.log(localName);
```

This causes an error because `localName` belongs to the function's local scope.

---

# 17. Lexical Scope

JavaScript uses **lexical scoping**.

That means scope is determined by where code is written.

Example:

```js
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

`inner()` can access `message` because it was defined inside `outer()`.

---

# 18. Scope Chain

Suppose:

```js
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  inner();
}
```

When `inner()` tries to find `a`, JavaScript searches outward.

Conceptually:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

This is called the **scope chain**.

---

# 19. Lexical Environment

A lexical environment stores identifier bindings and maintains a reference to an outer lexical environment.

Conceptually:

```text
Inner Environment
│
├── c
│
└── outer → Outer Environment

Outer Environment
│
├── b
│
└── outer → Global Environment

Global Environment
│
└── a
```

When JavaScript needs a variable, it searches the environment chain.

---

# 20. Closures

Closures are one of the most important JavaScript concepts.

Example:

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();
```

Output:

```text
1
2
3
```

Why does `count` remain available after `counter()` finishes?

Because the returned function maintains access to the lexical environment in which it was created.

That combination is commonly called a:

> Closure

Conceptually:

```text
counter()
    ↓
Creates count = 0
    ↓
Returns inner function
    ↓
counter() execution finishes

But:

inner function
      ↓
still has access to count
```

---

# 21. Example of Closure in Real Life

A common use case is data privacy.

```js
function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount();

account.deposit(500);

console.log(account.getBalance());
```

Output:

```text
1500
```

The variable `balance` is not directly exposed.

The functions form a closure around it.

---

# 22. What Happens When a Function Is Called?

Consider:

```js
function add(a, b) {
  return a + b;
}

add(10, 20);
```

When `add()` is called, a new function execution context is created.

Conceptually:

```text
Global Context
      ↓
     add()
      ↓
Function Context
┌──────────────────┐
│ a = 10           │
│ b = 20           │
│ local variables  │
│ outer reference  │
└──────────────────┘
```

Once the function completes, its execution context can be removed from the call stack.

---

# 23. `this` Keyword

`this` is determined by how a function is called.

Example:

```js
const user = {
  name: "Amit",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Output:

```text
Amit
```

Here, `this` refers to the object used to call the method.

However, arrow functions behave differently:

```js
const user = {
  name: "Amit",

  greet: () => {
    console.log(this.name);
  }
};
```

Arrow functions do not create their own `this`.

Instead, they use the surrounding lexical `this`.

---

# 24. Synchronous Code

JavaScript executes normal synchronous code sequentially.

Example:

```js
console.log("Start");

let x = 10;
let y = 20;

console.log(x + y);

console.log("End");
```

Execution:

```text
Start
30
End
```

The next statement normally waits until the current synchronous work finishes.

---

# 25. Asynchronous JavaScript

Now consider:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Timer
```

Why?

Because `setTimeout()` does not block the JavaScript execution thread for two seconds.

The timer is handled by the surrounding runtime.

---

# 26. JavaScript Runtime

JavaScript in the browser is more than just the JavaScript engine.

A simplified browser runtime looks like:

```text
┌───────────────────────────────┐
│        Browser Runtime        │
│                               │
│  JavaScript Engine            │
│  ┌─────────────────────────┐  │
│  │ Call Stack              │  │
│  │ Heap                    │  │
│  │ JS Execution            │  │
│  └─────────────────────────┘  │
│                               │
│  Web APIs                     │
│  Callback / Task Queues       │
│  Microtask Queue              │
│  Event Loop                   │
└───────────────────────────────┘
```

This is a very important distinction:

> The JavaScript language does not itself provide things like the DOM, `setTimeout()`, or browser networking APIs.

Those are provided by the host environment, such as the browser.

Node.js provides its own runtime APIs.

---

# 27. Web APIs

In a browser, APIs such as these are provided by the browser environment:

```js
setTimeout()
fetch()
document
localStorage
addEventListener()
```

Example:

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

The timer mechanism is handled by the host environment rather than by JavaScript's call stack alone.

---

# 28. Event Loop

The **Event Loop** coordinates asynchronous callbacks with JavaScript execution.

Consider:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

Output:

```text
A
C
B
```

Even though the timer is `0`, `"B"` does not run immediately.

Why?

Because the callback must wait until the current synchronous JavaScript work finishes.

---

# 29. Step-by-Step Event Loop Example

Code:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

### Step 1

```js
console.log("A");
```

Output:

```text
A
```

### Step 2

```js
setTimeout(...)
```

The timer is registered with the host environment.

### Step 3

```js
console.log("C");
```

Output:

```text
C
```

### Step 4

When the timer is ready, its callback becomes eligible for the task queue.

### Step 5

The event loop waits until the call stack is empty.

### Step 6

The callback is moved to the call stack.

### Step 7

```js
console.log("B");
```

Output:

```text
B
```

Final output:

```text
A
C
B
```

---

# 30. Task Queue

Callbacks from many asynchronous operations can become tasks that wait to be processed.

A simplified picture:

```text
Web APIs
   ↓
Task Queue
   ↓
Event Loop
   ↓
Call Stack
```

Example:

```js
setTimeout(() => {
  console.log("Timer");
}, 1000);
```

After the timer becomes ready:

```text
Timer callback
      ↓
Task Queue
      ↓
Event Loop
      ↓
Call Stack
```

---

# 31. Microtask Queue

JavaScript also has a **microtask queue**.

Important sources of microtasks include:

- Promise reactions
- `queueMicrotask()`
- MutationObserver callbacks in browsers

Example:

```js
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
```

---

# 32. Promise vs Timer

Consider:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Why?

Because after the current synchronous code finishes, the runtime processes pending microtasks before moving on to the next task.

A simplified order is:

```text
1. Call Stack / synchronous code
2. Microtask Queue
3. Next Task / Callback
```

---

# 33. Important Event Loop Example

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

Output:

```text
1
4
3
2
```

Execution:

```text
console.log("1")
      ↓
1

setTimeout()
      ↓
Task scheduled

Promise.then()
      ↓
Microtask scheduled

console.log("4")
      ↓
4

Synchronous execution ends
      ↓
Microtask queue
      ↓
3

Then task queue
      ↓
2
```

---

# 34. Async/Await

`async/await` makes asynchronous code easier to read.

Example:

```js
async function getData() {
  const result = await fetch("/api/users");

  console.log(result);
}
```

`await` does not freeze the entire JavaScript engine.

Instead, execution of that async function is paused until the awaited promise settles, allowing other JavaScript work to proceed.

---

# 35. Example of `async/await`

```js
console.log("Start");

async function test() {
  console.log("Inside");

  await Promise.resolve();

  console.log("After Await");
}

test();

console.log("End");
```

Output:

```text
Start
Inside
End
After Await
```

Why?

The function runs synchronously until the `await`.

After the awaited promise is ready, continuation is scheduled as a microtask.

---

# 36. Promise States

A Promise has three main states:

```text
Pending
   ↓
Fulfilled
```

or:

```text
Pending
   ↓
Rejected
```

Example:

```js
const promise = new Promise((resolve, reject) => {
  resolve("Success");
});
```

Initially:

```text
Pending
```

After `resolve()`:

```text
Fulfilled
```

---

# 37. Callback Queue vs Microtask Queue

A simplified comparison:

| Queue | Common Examples | Priority |
|---|---|---|
| Microtask Queue | Promise `.then()`, `queueMicrotask()` | Higher |
| Task Queue | `setTimeout()`, many event callbacks | Lower |

Example:

```js
setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});
```

Output:

```text
Promise
Timer
```

---

# 38. Event Loop Mental Model

A simplified model:

```text
                 ┌──────────────────┐
                 │   JavaScript     │
                 │    Call Stack    │
                 └────────┬─────────┘
                          │
                          ↓
                 ┌──────────────────┐
                 │ Microtask Queue  │
                 └────────┬─────────┘
                          │
                          ↓
                 ┌──────────────────┐
                 │    Event Loop    │
                 └────────┬─────────┘
                          │
                          ↓
                 ┌──────────────────┐
                 │    Task Queue    │
                 └──────────────────┘

Browser / Node Runtime
        ↑
        │
    Web / Runtime APIs
```

This is simplified, but it is an excellent learning model.

---

# 39. Why `setTimeout(fn, 0)` Is Not Immediate

Consider:

```js
setTimeout(() => {
  console.log("Hello");
}, 0);

console.log("World");
```

Output:

```text
World
Hello
```

`0` means roughly:

> The callback should not run before the timer's minimum delay has elapsed and the callback has an opportunity to be processed.

It does not mean:

> Run this function immediately.

---

# 40. Garbage Collection

JavaScript automatically manages memory.

When objects are no longer reachable, the engine can eventually reclaim their memory.

Example:

```js
let user = {
  name: "Amit"
};

user = null;
```

If there are no other references to the object, it becomes eligible for garbage collection.

---

# 41. Mark-and-Sweep

A simplified garbage collection strategy is **mark-and-sweep**.

Conceptually:

```text
Step 1: Find reachable objects

Global / roots
      ↓
Reachable Objects

Step 2: Mark them

Step 3: Find objects that are not reachable

Step 4: Remove them
```

Example:

```js
let a = {
  name: "A"
};

let b = {
  name: "B"
};

a = null;
b = null;
```

If no other references exist, those objects can eventually be collected.

Modern engines use sophisticated garbage collectors and optimization strategies beyond this simple model.

---

# 42. Memory Leak

JavaScript has garbage collection, but memory leaks can still happen.

Example:

```js
const users = [];

function addUser(user) {
  users.push(user);
}
```

If objects are continuously added and never removed, memory usage can keep growing.

Other common causes include:

- Unremoved event listeners
- Long-lived global references
- Timers that stay active unexpectedly
- Caches that grow without limits
- Closures retaining objects longer than intended

---

# 43. Event Listeners and Memory

Example:

```js
const button = document.querySelector("button");

function handleClick() {
  console.log("Clicked");
}

button.addEventListener("click", handleClick);
```

If a component or UI object is destroyed but the listener and associated references are kept alive unnecessarily, memory can be retained longer than expected.

Modern frameworks help manage these lifecycle issues, but developers still need to clean up resources appropriately.

---

# 44. Function Declarations vs Function Expressions

### Function Declaration

```js
sayHello();

function sayHello() {
  console.log("Hello");
}
```

This works because the function declaration is available during the setup of the surrounding scope.

### Function Expression

```js
sayHello();

const sayHello = function () {
  console.log("Hello");
};
```

This throws a `ReferenceError` because `sayHello` cannot be accessed before its `const` initialization.

---

# 45. Why `var` Is Different

Example:

```js
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

But:

```js
console.log(a);

let a = 10;
```

Result:

```text
ReferenceError
```

And:

```js
console.log(a);

const a = 10;
```

Also:

```text
ReferenceError
```

The important difference is the initialization and access rules for lexical declarations.

---

# 46. Block Scope

`let` and `const` are block-scoped.

Example:

```js
{
  let a = 10;
  const b = 20;
}

console.log(a);
```

This produces:

```text
ReferenceError
```

Because `a` exists only inside the block.

---

# 47. `var` and Block Scope

`var` is function-scoped rather than block-scoped.

Example:

```js
{
  var a = 10;
}

console.log(a);
```

Output:

```text
10
```

This is one reason modern JavaScript generally prefers:

```js
let
const
```

over:

```js
var
```

---

# 48. Prototype System

JavaScript uses **prototypal inheritance**.

Example:

```js
const user = {
  name: "Amit"
};

console.log(user.toString());
```

Where does `toString()` come from?

The object can inherit properties and methods through its prototype chain.

Conceptually:

```text
user
  ↓
Object.prototype
  ↓
null
```

When JavaScript looks for a property:

```js
user.toString
```

it checks the object first and then follows the prototype chain.

---

# 49. Prototype Chain

Example:

```js
const person = {
  name: "Amit"
};

console.log(person.toString);
```

Conceptually:

```text
person
  ↓
Object.prototype
  ↓
null
```

If a property is not found on the object, JavaScript searches its prototype.

---

# 50. Classes in JavaScript

JavaScript classes are built on top of the prototype system.

Example:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

Creating an object:

```js
const amit = new Person("Amit");

amit.greet();
```

The `greet()` method is placed on the class prototype rather than copied as a separate function onto every instance.

Conceptually:

```text
amit
  ↓
Person.prototype
  ↓
Object.prototype
  ↓
null
```

---

# 51. `new` Keyword

When we write:

```js
const person = new Person("Amit");
```

The `new` operation roughly involves:

1. Creating a new object.
2. Linking it to `Person.prototype`.
3. Calling the constructor with the new object as `this`.
4. Returning the resulting object, unless the constructor explicitly returns another object.

Conceptually:

```text
new Person("Amit")
       ↓
Create object
       ↓
Set prototype
       ↓
Run constructor
       ↓
Return object
```

---

# 52. Why JavaScript Can Handle Many Tasks

JavaScript may be single-threaded for JavaScript execution, but the overall runtime can use background facilities for operations such as:

- Network requests
- Timers
- File system work in Node.js
- DNS operations
- Certain cryptographic tasks

This allows JavaScript applications to remain responsive while external operations happen.

---

# 53. Browser Example

Consider:

```js
console.log("Start");

fetch("/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

console.log("End");
```

Typical flow:

```text
Start
  ↓
fetch() starts network operation
  ↓
End
  ↓
Network completes
  ↓
Promise settles
  ↓
Microtask scheduled
  ↓
Callback executes
```

The network operation does not block the JavaScript call stack waiting for the server.

---

# 54. Node.js Example

Node.js uses the V8 JavaScript engine together with the Node.js runtime.

Example:

```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});
```

The file operation is handled through Node's runtime facilities.

When the operation completes, the callback can be scheduled for execution.

---

# 55. Complete Mental Model

Here is the most useful mental model to remember:

```text
                 JAVASCRIPT RUNTIME

          ┌───────────────────────────┐
          │       JavaScript Engine   │
          │                           │
          │  ┌─────────────────────┐  │
          │  │     Call Stack      │  │
          │  └─────────────────────┘  │
          │                           │
          │  ┌─────────────────────┐  │
          │  │     Memory Heap     │  │
          │  └─────────────────────┘  │
          └──────────────┬────────────┘
                         │
                         ↓
                 Host Environment
                         │
          ┌──────────────┴──────────────┐
          ↓                             ↓
      Runtime APIs                 Browser APIs
          │                             │
          └──────────────┬──────────────┘
                         ↓
                   Async Results
                         ↓
                ┌────────────────┐
                │ Microtask Queue│
                └───────┬────────┘
                        ↓
                 ┌──────────────┐
                 │  Event Loop  │
                 └──────┬───────┘
                        ↓
                  Task Queue
                        ↓
                  Call Stack
```

---

# 56. Full Example

Let's combine many concepts:

```js
console.log("Start");

const user = {
  name: "Amit"
};

function greet() {
  console.log(`Hello ${user.name}`);

  setTimeout(() => {
    console.log("Timer");

    Promise.resolve().then(() => {
      console.log("Promise");
    });
  }, 0);
}

greet();

console.log("End");
```

Let's understand what happens.

### Step 1

Global execution context is created.

The engine prepares the global environment.

### Step 2

```js
console.log("Start");
```

Output:

```text
Start
```

### Step 3

```js
const user = {
  name: "Amit"
};
```

The object is created.

### Step 4

`greet()` is called.

A new function execution context is created.

### Step 5

```js
console.log(`Hello ${user.name}`);
```

Output:

```text
Hello Amit
```

### Step 6

`setTimeout()` registers a timer with the host environment.

### Step 7

`greet()` finishes.

Its execution context is removed from the call stack.

### Step 8

```js
console.log("End");
```

Output:

```text
End
```

### Step 9

The timer becomes ready.

Its callback is scheduled as a task.

### Step 10

The event loop allows the callback to run.

Output:

```text
Timer
```

### Step 11

Inside the timer callback:

```js
Promise.resolve().then(...)
```

The Promise reaction is queued as a microtask.

### Step 12

The microtask runs.

Output:

```text
Promise
```

Final output:

```text
Start
Hello Amit
End
Timer
Promise
```

---

# 57. How to Think About JavaScript Internally

Whenever you see JavaScript code, ask these questions:

### Question 1

Where is the code executing?

```text
Global?
Function?
Block?
```

### Question 2

What is currently on the call stack?

```text
Global
  ↓
functionA
  ↓
functionB
```

### Question 3

Where is the data stored?

```text
Primitive values
Objects
Arrays
Functions
```

### Question 4

What is the scope chain?

```text
Local
  ↓
Outer
  ↓
Global
```

### Question 5

Is the code synchronous or asynchronous?

```text
Synchronous → Call Stack
Asynchronous → Host Runtime + Queues
```

### Question 6

Is there a Promise?

If yes, remember:

```text
Promise reaction → Microtask Queue
```

### Question 7

Is there a timer or event callback?

Think:

```text
Host environment
     ↓
Task Queue
```

---

# 58. Most Important Concepts to Remember

The entire topic can be reduced to these ideas:

```text
JavaScript Source Code
        ↓
      Parser
        ↓
       AST
        ↓
Compilation / Optimization
        ↓
 Execution
        ↓
Execution Context
        ↓
   Call Stack
        ↓
Variable / Object Memory
        ↓
Lexical Scope
        ↓
Scope Chain
        ↓
   Closures
        ↓
Host Environment
        ↓
Async APIs
        ↓
Microtask / Task Queues
        ↓
   Event Loop
        ↓
   Call Stack
```

---

# 59. One-Line Definitions

| Concept | Simple Meaning |
|---|---|
| JavaScript Engine | Program that executes JavaScript |
| Parser | Understands JavaScript syntax |
| AST | Tree representation of source code |
| Execution Context | Environment in which code runs |
| Call Stack | Tracks currently executing functions |
| Heap | Memory area used for dynamically allocated data |
| Scope | Determines where variables are accessible |
| Lexical Environment | Stores bindings and outer references |
| Scope Chain | Path used to find variables |
| Closure | Function + preserved lexical environment |
| Hoisting | Declaration processing before normal execution |
| TDZ | Period before `let`/`const` initialization |
| Prototype | Object used for inheritance |
| Promise | Represents eventual completion/failure of async work |
| Microtask Queue | Queue for promise reactions and other microtasks |
| Task Queue | Queue for tasks such as timers and events |
| Event Loop | Coordinates queues and JavaScript execution |
| Garbage Collection | Automatic reclamation of unreachable memory |

---

# 60. Final Mental Picture

Remember this picture:

```text
                YOUR JAVASCRIPT
                      │
                      ↓
                  JS ENGINE
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
      CALL STACK                HEAP
          │                       │
      Executes                Stores data
      functions               and objects
          │
          ↓
    HOST ENVIRONMENT
          │
    ┌─────┴──────────┐
    ↓                ↓
 Async APIs       Events / Timers
    │                │
    └───────┬────────┘
            ↓
       QUEUES
      ┌─────┴─────┐
      ↓           ↓
  Microtasks     Tasks
      │           │
      └─────┬─────┘
            ↓
        EVENT LOOP
            ↓
        CALL STACK
```

The most important idea is:

> **The JavaScript engine executes JavaScript, while the host environment provides asynchronous capabilities, and the event loop coordinates when queued work gets a chance to run.**

Once you understand **Execution Context → Call Stack → Scope → Closures → Promises → Microtasks → Event Loop**, JavaScript starts becoming much easier to reason about.

---

# Quick Revision

```text
1. JavaScript is typically executed on a single JS thread.
2. The engine parses and compiles JavaScript.
3. Execution contexts describe the environment in which code runs.
4. The call stack tracks function execution.
5. The heap stores dynamically allocated data.
6. Scope determines variable accessibility.
7. Closures preserve access to lexical environments.
8. The host runtime provides asynchronous APIs.
9. Promise reactions use the microtask queue.
10. Timers and many events become tasks.
11. The event loop coordinates queued work with the call stack.
12. Garbage collection reclaims unreachable memory.
13. JavaScript objects use prototype-based inheritance.
14. `async/await` is built on top of Promises.
15. `setTimeout(fn, 0)` schedules work; it does not run immediately.
```

## Best Learning Order

```text
JavaScript Basics
       ↓
Execution Context
       ↓
Call Stack
       ↓
Hoisting
       ↓
Scope
       ↓
Lexical Environment
       ↓
Closures
       ↓
`this`
       ↓
Prototype & Classes
       ↓
Promises
       ↓
Microtask Queue
       ↓
Event Loop
       ↓
Async/Await
       ↓
Memory Management
       ↓
Garbage Collection
```

This order gives you a strong foundation for understanding what JavaScript is actually doing behind the code you write.