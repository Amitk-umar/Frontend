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

// ## Strings

// 1. Create a string and print its length.
const intro = "I am a Web Developer";
console.log(intro.length);

// 2. Convert a string into uppercase.
console.log(intro.toUpperCase());

// 3. Convert a string into lowercase.
console.log(intro.toLowerCase());

// 4. Check if a string includes the word `"JavaScript"`.
const astring = "hello i am working with Javascript";
console.log(astring.includes("Javascript"));

// 5. Extract the word `"World"` from `"Hello World"`.
const word = "Hello World";
console.log(word.slice(6));
// Another way - by split
console.log(word.split(" ")[1]);

// 6. Replace `"apple"` with `"mango"` in a sentence.
const fruitName = "apple";
console.log(fruitName.replace("apple", "mango"));

// 7. Split `"HTML,CSS,JS"` into an array.
const progLang = "HTML,CSS,JS";
console.log(progLang.split(","));

// 8. Remove extra spaces from a string.
console.log(astring.trim());

// 9. Repeat the word `"Hi"` 5 times.
const hiHello = "Hii";
console.log(hiHello.repeat(5));

// 10. Print the first character of a string.
console.log(hiHello.charAt(0));

// 11. Use template literals to print:`"My name is Amit and I am 20 years old"`
console.log(`MY Name is Amit kumar and I am 20 years old`);

// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
console.log(Math.round(4.7));

// 2. Find the square root of 81.
console.log(Math.sqrt(6));

// 3. Find the maximum number from `10, 20, 5, 99`.
console.log(Math.max(10, 20, 5, 99));

// 4. Generate a random number between 1 and 100.
const randomValue = Math.floor(Math.random() * 100 + 1);
console.log("Random number between  1 and 100 : ", randomValue);

// 4. Generate a random number between 5 and 100.
const randomValueBetween = Math.floor(Math.random() * 96 + 5);
console.log("Random number between  5 and 100 : ", randomValueBetween);

// 5. Convert `"99.99"` into an integer.
console.log(parseInt(Math.floor(99.99)));

// 6. Check whether `25` is an integer or not.
console.log(Number.isInteger(25));

// 7. Use `toFixed(2)` on `3.141592`.
let num = 3.141592;
console.log(num.toFixed(2));

// ## Conditionals

// 1. Check whether a number is positive or negative.
let numb = -50;
if (numb > 0) {
  console.log("Positive");
} else if (numb < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// Another way --> 1 for positive , -1 for negative and 0 for Zero.
let signNumber = -10
signResult = Math.sign(signNumber)
console.log(signResult);


// 2. Check whether a number is even or odd.


// 3. Check whether a person is eligible to vote.
// 4. Find the largest among two numbers.
// 5. Find the largest among three numbers.
// 6. Check whether a year is a leap year.
// 7. Check whether a number is divisible by both 3 and 5.
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.
