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

var number1 = +(prompt('enter first number'))
var number2 = Number(prompt('enter second number'))
console.log(number1 + number2);


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


