var prompt = require('prompt-sync')();


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





//problem 9 : check if a year is leap year or not?
// function isLeapYear(year) {
//     if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//         return "Leap Year";
//     }

//     return "Not a Leap Year";
// }

// module.exports = { isLeapYear };




//problem 10 : calculate final payable amount - brute force approach
// function calculateFinalAmount(amount) {
//     // Write your logic here
//     let payableAmount;

//     if (amount >= 0 && amount <= 5000) {
//         return amount;
//     }
//     else if (amount >= 5001 && amount <= 7000) {
//         payableAmount = amount - (amount * (5 / 100));
//         return payableAmount;
//     }
//     else if (amount >= 7001 && amount <= 9000) {
//         payableAmount = amount - (amount * (10 / 100));
//         return payableAmount;
//     }
//     else if (amount > 9000) {
//         payableAmount = amount - (amount * (20 / 100));
//         return payableAmount;
//     }
//     else {
//         return 'Enter a valid amount!';
//     }
// }

// module.exports = { calculateFinalAmount };




//problem 10 : calculate final payable amount - optimal approach
// function calculateFinalAmount(amount) {
//     let discount = 0;

//     if (amount < 0) {
//         return "Enter a valid amount!";
//     }

//     if (amount > 9000) {
//         discount = 20;
//     } else if (amount > 7000) {
//         discount = 10;
//     } else if (amount > 5000) {
//         discount = 5;
//     }

//     return amount - (amount * discount / 100);
// }

// module.exports = { calculateFinalAmount };






//problem 11:  Calculate Electricity Bill Based on Units consumed
// function calculateElectricityBill(unit) {
//     if (unit < 0) return "enter units1!";

//     let bill = 0;

//     if (unit <= 100) {
//         bill = unit * 4.2;
//     } 
//     else if (unit <= 200) {
//         bill = (100 * 4.2) + ((unit - 100) * 6);
//     } 
//     else if (unit <= 400) {
//         bill = (100 * 4.2) + (100 * 6) + ((unit - 200) * 8);
//     } 
//     else {
//         bill = (100 * 4.2) +
//                (100 * 6) +
//                (200 * 8) +
//                ((unit - 400) * 13);
//     }

//     return bill.toFixed(1);
// }

// module.exports = { calculateElectricityBill };


//switch conditional statement
// let day = Number(prompt("Enter day : "))
// switch (day) {
//     case 1: console.log("it's Monday");
//         break;
//     case 2: console.log("it's Tuesday");
//         break;
//     case 3: console.log("it's Wednesday");
//         break;
//     case 4: console.log("it's Thursday");
//         break;
//     case 5: console.log("it's friday");
//         break;
//     case 6: console.log("it's saturday");
//         break;
//     case 7: console.log("it's sunday");
//         break;
//     default: console.log("Enter a valid day!");
// }





