const prompt = require('prompt-sync')()


//problem 1 : add two numbers
// function add() {
//     // write Your Code Here
//     let a = +(prompt('enter value of a : '))
//     let b = +(prompt('enter value of b:'))
//     console.log(a+b);

// }
// add();





// problem2 : swap two number
// function swapNumbers(a, b) {
//     [a, b] = [b, a];

//    return [a,b]
// }
// swapNumbers(10,30)





//problem3: calculate Compound interest
// function calculateCompoundInterest(P, r, t, n) {
//     let A = P * (1 + r / n) ** (n * t);
//     let CI = A - P;

//     return CI.toFixed(2)
// }
// calculateCompoundInterest(1000,0.5,10,4)

//problem3 Another way: calculate Compound interest
// function calculateCompoundInterest(P, r, t, n) {
//   let A = P * Math.pow((1+r/n),(n*t));
//     let CI = A - P;

//     return CI.toFixed(2)
// }
// calculateCompoundInterest(1000,0.5,10,4)






// problem 4 : calculate area of triangle using Heron's Formula
// function calculateTriangleArea(a, b, c) {
//     // Write your logic here
//     let s = (a + b + c) / 2;
//     let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return A.toFixed(2);
// }

// module.exports = { calculateTriangleArea };


//problem 5 : calculate circumference and Area of circle
// function calculateCircleProperties(r) {
//     // Write your logic here
//     let C = 2 * (Math.PI) * r;
//     let A = Math.PI * (r ** 2);
//     return [C.toFixed(2), A.toFixed(2)]
// }

// module.exports = { calculateCircleProperties };




// problem 6: calculate greatest of two numbers
// function findGreatest(a, b) {
//     // Write your code here
//     if (a > b) {
//         return a
//     }
//     else {
//         return b
//     }
// }
// module.exports = { findGreatest };






// problem 7 :Check if a number is even or odd
// function checkEvenOrOdd(num) {
//     // Write your logic here
//     if (num % 2 === 0) return 'Even'
//     else return 'Odd'
// }

// module.exports = { checkEvenOrOdd };






//problem 8:  check if user is valid or not?
// function checkVoterEligibility(name, age) {
//     // Write your logic here
//     if (age >= 18) return `${name} is a valid voter.`
//     else return `${name} is not a valid voter.`
// }

// module.exports = { checkVoterEligibility };





//problem 9 : 