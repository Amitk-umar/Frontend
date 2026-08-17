Hoisting is JavaScript's default behavior of reading all variable and function declarations before executing any other code.Conceptually, it feels like JavaScript physically moves all your declarations to the top of your file or function. In reality, the JavaScript engine simply allocates memory for them during a quick "setup phase" before running your code line by line.The Golden Rule of HoistingJavaScript only hoists declarations, not initializations (assignments).Declaration: var x; (JavaScript registers the name)Initialization: x = 5; (JavaScript assigns the value)How Different Code Types Behave1. Function Declarations (Fully Hoisted)Traditional functions are completely hoisted. You can call them on line 1, even if you write the actual function on line 100.javascriptsayHello(); // Output: "Hello!"

function sayHello() {
    console.log("Hello!");
}
Use code with caution.2.var Variables(Hoisted as undefined)Variables declared with var are registered early, but their assigned values are left behind.If you read them before the assignment line, they exist but return undefined.javascriptconsole.log(snack); // Output: undefined
var snack = "Cupcake";
console.log(snack); // Output: "Cupcake"

// --- How the browser actually sees it behind the scenes: ---
// var snack;
// console.log(snack);
// snack = "Cupcake";
Use code with caution.3.let and const Variables (Hoisted but Locked)Modern variables are technically hoisted, but JavaScript blocks you from touching them until the execution line physically reaches them.The unsafe zone before their declaration is called the Temporal Dead Zone(TDZ).Trying to access them early causes a crash.javascriptconsole.log(fruit); // Throws a ReferenceError!
let fruit = "Apple"; 
Use code with caution.4.Arrow Functions and Expressions(Not Hoisted)If you write a function using let, const, or var (like an arrow function), it follows the rules of variables, not functions.javascriptgreet(); // Throws a ReferenceError (if using const) or TypeError (if using var)

const greet = () => {
    console.log("Hi!");
};
Use code with caution.Best Practices to Avoid Hoisting BugsAlways declare your variables using let and const instead of var.Define your variables and functions at the very top of their scope before using them.If you are preparing for a technical interview or debugging a specific piece of code, let me know! I can show you how hoisting behaves inside loops or nested functions.F