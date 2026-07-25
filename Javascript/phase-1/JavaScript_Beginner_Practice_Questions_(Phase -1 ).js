// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
console.log("Hello Javascript");

// 2. Print your name, age, and city using one `console.log()`.

console.log("My name is Amit kumar and my age is 21 and city Raibareli");

// 3. Print a warning message using `console.warn()`.
console.warn(
  "DISCLAIMER: The views and opinions expressed on this page are those of the authors and do not necessarily reflect the official policy or position of the College.",
);

// 4. Print an error message using `console.error()`.
console.error("error: error in line number 21");

// 5. Use `console.table()` to display an array of 5 numbers.
console.table(["1", "2", "3", "4", "5"]);

// ## Variables

// 1. Create a variable called `studentName` and store your name in it.

var studentName = "Amit kumar";

// 2. Create a variable `age` and print it.
var age = 21;
console.log(age);

// 3. Create two variables and swap their values.
var a = 10;
var b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);

// 4. Create a constant variable for `PI` and print it.
const PI = Math.PI;
console.log(PI);

// 5. Declare a variable without assigning a value and print it.
var kardiya;
console.log(kardiya);

// 6. Create a variable `score` and increase it by 10.
var score = 150;
score += 10;
console.log(score);

// 7. Create three variables for first name, last name, and full name.
var firstName = "Amit";
var lastName = "Maurya";
var fullName = `${firstName} ${lastName}`;
console.log(fullName);

// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
var strtype = "string";
var numtype = 23;
var booltype = true;
var nulltype = null;
var undeftype;

// 2. Check the type of different variables using `typeof`.
console.log(
  `${typeof strtype} ${typeof numtype} ${typeof booltype} ${typeof nulltype} ${typeof undeftype}`,
);

// 3. Store your mobile number in a variable and check its type.
var phonenum = 9877729580;
console.log(typeof phonenum);

// 4. Create a variable with value `null` and check its type.
var nullValue = null;
console.log(typeof nullValue);

// 5. Create a bigint number and print it.
var bignum = BigInt(10 ** 55);
console.log(typeof bignum);

// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.

let number = parseInt("50");
console.log(typeof number);

// 2. Convert the number `100` into a string.
const n2 = 100;
const nToStr = n2.toString();
console.log(typeof nToStr);

// 3. Convert `"true"` into a boolean.
const trueValue = "true";
const trueToBoolean = trueValue === "true";
console.log(trueValue, typeof trueToBoolean);

// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
// 1. Create a variable with value `"123abc"` and convert it into a number.
// 2. Use `parseInt()` on `"500px"`.

console.log("5" + 2);
console.log("5" - 2);
console.log("10" - "5");
console.log(true + 1);

const strnum = "123abc";
const newstrnum = Number(strnum);
console.log(typeof newstrnum);

const fiveHundred = "500px";
const newType = parseInt(fiveHundred);
console.log(typeof newType);

// ## Operators

// 1. Add two numbers and print the result.
let num1 = 180;
let num2 = 20;
result = num1 + num2;
console.log(`Addition of two Numbers : ${result}`);

// 2. Find the remainder when 25 is divided by 4.
const remainder = 25 % 4;
console.log(remainder);

// 3. Find the square of a number using exponent operator.
const exponentNumber = 5 ** 5;
console.log(exponentNumber);

// Another way
const anotherExponentWay = Math.pow(5, 5);
console.log(anotherExponentWay);

// 4. Increment a variable using `++`.
let ekVariable = 5;
console.log(ekVariable++); //5
console.log(++ekVariable); //7

// 5. Decrement a variable using `-`.
let decVariable = 10;
console.log(--decVariable); //9
console.log(decVariable--); //9

// 6. Use `+=` operator to increase a variable by 20.
let increasedByOp = 10;
increasedByOp += 20;
console.log(increasedByOp);

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
const number1 = 10;
const number2 = 20;
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

// 8. Check if two values are strictly equal using `===`.
const value1 = 10;
const value2 = 20;
console.log("strictly equality using `===`", value1 === value2);

// 9. Compare `"10"` and `10` using both `==` and `===`.
const strNumber = "10";
const intNumber = 10;
console.log(strNumber == intNumber);
console.log(strNumber === intNumber);

// 10. Create two boolean variables and test `&&`, `||`, and `!`.

const bool1 = true;
const bool2 = false;
const newbool3 = !bool2;
console.log("&& operator", bool1 && bool2);
console.log("|| operator", bool1 || bool2);
console.log("! operator", newbool3);
