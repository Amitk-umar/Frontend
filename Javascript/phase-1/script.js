// console.log("hello , JavaScript");
// console.warn('This is warning!')
// console.error('This is error')
// console.table(['Ankit Jangir','Ravi sharma','Raghav Sharma'])

// ------------------Variables--------------------
// var a = 10
// var b = 20
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

//DataTypes
// -Premitive Datatype
// - Number
// - String
// - Boolean
// - Undefined
// - null
// - Bigint
// - Symbol

//Non-Premitive (Reference) DataType
// - Array
// - Objects
// - function

//Symbol - for declaring a unique value either its same as comparing value
// var s1= Symbol(20)
// var s2 = Symbol(20)
// console.log(s1==s2);

// alert
// confirm
// prompt

// alert('This is alert message!')

// var yes = confirm('Are you 18+ ?  if yes can visit this website!')
// console.log(yes);

// var uname = prompt('Enter your name')
// console.log(uname);

// var fname = prompt('enter first name')
// var lname = prompt('enter last name')
// console.log(fname+"",lname);

// var number1= Number(prompt('enter first number'))
// --> for converting prompt value into integer/number use this prefix in prompt

// var number1 = +(prompt('enter first number'))
// var number2 = Number(prompt('enter second number'))
// console.log(number1 + number2);

// ---------------Binary Operations in Js-------------------

// A binary operator in JavaScript is any operator that requires two operands (one before the operator and one after) to perform an action. According to the MDN Web Docs, all binary operators in JavaScript use infix notation, meaning the operator sits directly between its two operands (e.g., operand1 operator operand2).

// Arithmetic Operators
// Perform mathematical calculations on two numeric values.
// + (Addition): 5 + 3 results in 8.
// - (Subtraction): 10 - 4 results in 6.
// * (Multiplication): 3 * 4 results in 12.
// / (Division): 12 / 3 results in 4.
// % (Remainder / Modulus): 11 % 3 results in 2.
// ** (Exponentiation): 2 ** 3 results in 8.

// Assignment Operators
// Assign a value to a variable based on the value of the second operand.
// = (Assignment): let x = 10.
// += / -= / *= / /=
// (Compound Assignment): x += 5 (equivalent to x = x + 5).

// Comparison & Relational Operators
// Compare two values and return a boolean (true or false).
// == (Loose Equality): Compares values with type coercion.
// === (Strict Equality): Compares both value and type without coercion.
// != / !== (Inequality / Strict Inequality).
// > / < (Greater than / Less than).
// >= / <= (Greater than or equal to / Less than or equal to).instanceof / in (Relational checks).

// Logical Operators
// Combine or evaluate multiple boolean expressions.
// && (Logical AND): Returns true if both operands are true.
// || (Logical OR): Returns true if at least one operand is true.
// ?? (Nullish Coalescing): Returns the right-hand operand when the left-hand operand is null or undefined.

// ------------Task-------------
// var math = Number(prompt("Enter your Math Mark"));
// var chem = Number(prompt("Enter your chemistry Mark"));
// var phy = Number(prompt("Enter your physics Mark"));

// var average = ((math + chem + phy) / 3);
// console.log("You got",average,  "percent");

// if (average >= 85) {
//   console.log("You are Eligible for scholarship ! Congratulations");
// } else {
//   console.log("You are not eligible for Scholarship");
// }



// // -------------Question------------
// var gender = prompt('Male or female ?').toLowerCase()
// var age = +(prompt('Age?'))

// if(gender == 'f'){
//   if(age>=18 && age<=60){
//     console.log('you will get ₹1500/month');
//   }else{
//     console.log('you will not getting money');
//   }
// }
// else{
//   console.log('Not allowed');
// }



// console.log(undefined +  1); //NaN
// console.log(null +  1); //1
// console.log(undefined +  "1"); //undefined1
// console.log(null +  "1"); //null1



// The Math Object  -> Math  is a built -in object with mathematical methods and constants.

// console.log(Math.PI);  //  pi value
// console.log(Math.E);   //  euler's constant

// console.log(Math.ceil(-3.5)); //always round up the value
// console.log(Math.abs(-50)); //convert all number/value either positive or negative in absolute value (positive number)
// console.log(Math.pow(2, 3));

// // common pattern — random integer between min and max:
// // let rand = Math.floor(Math.random() * (max - min + 1)) + min;
// let rand = Math.floor(Math.random() * (100 - 5 + 1)) + 5;
// console.log(rand);

// //Switch Statement 
// let day = "monday"
// switch (day.toLowerCase()) {
//   case "monday": console.log("Shiv ji ki pooja karo");
//     break;
//   case "tuesday": console.log("Hanuman ji ki pooja karo");
//     break
//   case "saturday": console.log("shni dev ki pooja karo");
//     break
//   case "sunday": console.log("Surya dev ki pooja karo");
//     break
//   default: console.log("Kisi din toh nha ke pooja kar liya kar");
// }

// // for...of Loop (for arrays and strings)

// let fruits = ["apple", "mango", "banana", "starfruit", "pineapple"]
// for (let fruit of fruits) {
//   console.log(fruit);    //apple,mango,banana,starfruit,pineapple 
// }

// let word = "hello Raghav"
// for (let char of word) {
//   console.log(char);
// }

// // for...in Loop (for objects — brief intro)
// let userInfo = { name: "Ankit", age: 24 }
// for (let key in userInfo) {
//   console.log(key, ":", userInfo[key]);  //name:"Ankit"  age:24
// }

//  break and continue

// // break — exit the loop immediately
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);
// }// Prints: 1, 2, 3, 4

// // continue — skip the current iteration, go to the next
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }// Prints: 1, 2, 4, 5  (3 is skipped)


// Project 1: Simple Calculator
// let num1 = Number(prompt("Enter first number:"));
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = Number(prompt("Enter second number:"));
// let result; if (operator === "+") result = num1 + num2;
// else if (operator === "-") result = num1 - num2;
// else if (operator === "*") result = num1 * num2;
// else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
// else result = "Invalid operator";
// console.log("Result:", result);



// Project 2: FizzBuzz (the classic interview question)
// Print numbers 1 to 50. But:
// • For multiples of 3, print "Fizz"
// • For multiples of 5, print "Buzz"
// • For multiples of both, print "FizzBuzz"

// for(let i = 1 ; i<=50;i++){
//   if(i%15 === 0 ) console.log(`${i} : FizzBuzz`);
//   else if(i%3 === 0 ) console.log(`${i} : Fizz`);
//   else if(i%5 === 0 ) console.log(`${i} : Buzz`);
//   else console.log(i);
// }



// Project 3: Number Guessing  Game
// let secret = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;
// let guess;

// do {
//   guess = Number(prompt(`Guess a number between 1 to 100 : `));
//   attempts++;
//   if(guess > secret) console.log(`you guess too high`);
//   else if (guess < secret) console.log(`you guess too low`);

// } while (secret !== guess)
// console.log(`you get it in ${attempts}`)



// Project 4: Temperature Converter
// let temp = Number(prompt("Enter Temperature :"))
// let unit = prompt("Is it in Celsius (C) or Fahrenheit (F)?").toUpperCase()
// if (unit === "C") console.log(`${temp}°C = ${(temp * 9 / 5) + 32}°F`);
// else if (unit === "F") console.log(`${temp}°F = ${((temp - 32) * 5 / 9).toFixed(2)}°C`);
// else console.log("InValid unit");




// project 5 : Count Vowels in a String
let str = prompt("Enter a string:").toLowerCase()

let vowels = "aeiou"
let count = 0;

for(let char of str){
  if(vowels.includes(char))
    count++
}

console.log(`Number of vowels: ${count}`);