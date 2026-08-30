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











//Async await function


//  async function apiCalling(){
//   const response = await fetch('https://picsum.photos/v2/list')
//   let data  = await response.json()
//   console.log(data);

// }

// apiCalling()



// //Promises in Async js
// let p1 = new Promise(function (response, reject) {

//   console.log('promise is pending...');
//   let result = true
//   setTimeout(() => {
//     if (result) {

//       response()
//     }
//     else {

//       reject()
//     }
//   }, 2000);
// }).then(function () {
//   console.log('Promise is Fulfilled');
// }).catch(function () {
//   console.log('Promise is Rejected');
// }).finally(function () {
//   console.log('promise complete');
// })



//Food order in Zomato Example
let foodOrder = function () {

  let myOrder = new Promise(function (res, rej) {
    console.log('your order is Coming...');

    let orderStatus = true
    setTimeout(() => {
      if (orderStatus) {
        res()
      } else {
        rej()
      }
    }, 2000);
  }).then(function () {
    console.log('order received it time to make Payment...');
  }).catch(function () {
    console.log('Not received order');
  }).finally(function () {
    console.log('Order Received Successfully !');
  })
}
foodOrder()
















