// In JavaScript, setInterval, setTimeout, clearInterval, and clearTimeout are collectively called timing functions or timer methods.They are part of the Window object in web browsers (and the global object in Node.js), allowing you to schedule code execution asynchronously.


// The Core Timer Methods
// setTimeout(): Executes a callback function once after a designated delay in milliseconds.
// setInterval(): Executes a callback function repeatedly at a fixed time interval in milliseconds.
// clearTimeout(): Cancels a scheduled timeout before it has a chance to run.
// clearInterval(): Stops a continuously running interval timer from repeating further.


// // 1. setTimeout Example
// const timeoutId = setTimeout(() => {
//   console.log("This runs once after 2 seconds");
// }, 2000);

// // Cancel the timeout before it executes
// clearTimeout(timeoutId); 

// // 2. setInterval Example
// const intervalId = setInterval(() => {
//   console.log("This runs every 1 second");
// }, 1000);

// // Stop the repeating interval after some time
// clearInterval(intervalId); 


 async function apiCall(){
  const fetchingData = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(fetchingData);

}

apiCall()