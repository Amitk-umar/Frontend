# How Asynchronous JavaScript Works

JavaScript is a single-threaded language, meaning it can only execute one line of code at a time. To prevent the main thread from freezing during time-consuming operations (like network requests or timers), JavaScript uses an asynchronous, non-blocking architecture.

## The Core Components

This architecture relies on four main components working together:

1. **Call Stack:** The main thread where JavaScript executes your code, one function at a time.
2. **Web APIs:** Browser environments (handling `setTimeout`, `fetch`, DOM events) or Node.js APIs that take over asynchronous tasks and process them in the background.
3. **Queues:** Waiting areas where finished background tasks line up to re-enter the main thread. There are two main types:
   - **Macrotask Queue (Task Queue):** For tasks like `setTimeout` and `setInterval`.
   - **Microtask Queue:** For higher-priority tasks like Promise resolutions (`.then`) and `MutationObserver`.
4. **Event Loop:** A continuous monitor that checks if the Call Stack is empty. If it is, it pushes the next item from the Queues onto the Call Stack, always prioritizing the Microtask Queue over the Macrotask Queue.

## Step-by-Step Execution Flow

1. **Code enters the Call Stack:** JavaScript encounters an asynchronous function like `setTimeout()` and pushes it onto the Call Stack.
2. **Offloading to Web APIs:** JavaScript hands the timer over to the browser's Web APIs. The `setTimeout()` function is immediately removed from the Call Stack, allowing the rest of your synchronous code to run.
3. **Background processing finishes:** Once the timer expires, the Web API pushes the associated callback function into the **Macrotask Queue**.
4. **The Event Loop waits:** The Event Loop waits until the Call Stack is completely empty (meaning all synchronous code has finished).
5. **Executing the Callback:** The Event Loop grabs the callback from the Queue, pushes it onto the Call Stack, and it finally executes.

---

## Code Examples: The Evolution of Async JavaScript

### 1. Callbacks (The Old Way)
A callback is a function passed as an argument to another function, to be executed later.

```javascript
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timer finished (Callback)");
}, 1000);

console.log("3. End");

/* 
Output:
1. Start
3. End
2. Timer finished (Callback)
*/
```

### 2. Promises (The Standard Way)
Promises represent a value that might be available now, in the future, or never. They help avoid deeply nested "callback hell".

```javascript
console.log("1. Request started");

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log("2. Data received:", data.title);
  })
  .catch(error => {
    console.error("Error:", error);
  });

console.log("3. Request is processing in background...");
```

### 3. Async / Await (The Modern Way)
Built on top of Promises, `async`/`await` allows you to write asynchronous code that *looks* and *behaves* like synchronous code. It's much easier to read and maintain.

```javascript
async function fetchData() {
  console.log("1. Fetching data...");
  
  try {
    // Execution inside this function pauses here until the Promise resolves,
    // but the rest of the program outside this function keeps running!
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    
    console.log("2. Data received:", data.title);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
console.log("3. This logs while waiting for data...");

/*
Output:
1. Fetching data...
3. This logs while waiting for data...
2. Data received: delectus aut autem
*/
```
