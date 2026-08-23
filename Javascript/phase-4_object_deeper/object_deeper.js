console.log(`---------------------------Js Object Deeper -----------------------------------`);



//📍 this keyword in JavaScript - In JavaScript, the this keyword refers to the object that is currently executing or invoking the function. Crucially, the value of this is not static; it is determined entirely at runtime based on how a function is called, rather than where it is written.



// Contextual Behavior of this -  The value of this changes depending on the execution context.You can easily determine its value by looking at these five common scenarios:



//  1. Inside an Object Method(Implicit Binding)When a function is called as a method of an object, this points directly to the object containing the method.


// const obj = {
//     firstName: 'Amit',
//     lastName: 'Kumar',
//     age: 22,
//     sayhii: function () {
//         console.log(this.firstName);
//     }
// }

// obj.sayhii()



// 2. Inside a Regular Function (Default Binding)When a standalone function is invoked normally, its behavior depends on whether you are running in strict mode:
// • Non-Strict Mode: this defaults to the global object (window in browsers, global in Node.js).
// • Strict Mode ('use strict';): this will be undefined.

// function showContext() {
//   console.log(this);
// }
// showContext(); // Logs the 'window' object (in browser, non-strict mode)



// 3. Inside Arrow Functions (Lexical Binding)Arrow functions do not possess their own this binding. Instead, they inherit this from the enclosing outer scope where they were defined.

// const user = {
//   name: "Bob",
//   sayLater() {
//     setInterval(() => {
//       // 'this' inherits from sayLater(), which points to the user object
//       console.log(`Hi, I am ${this.name}`);
//     }, 1000);
//   }
// };
// user.sayLater(); // Output after 1 second: "Hi, I am Bob"


// 4. The new Operator (Constructor Functions)When a function is invoked with the new keyword, this points to a brand-new, empty object created under the hood.

// function Person(name) {
//   this.name = name; // 'this' references the fresh object instance
// }
// const john = new Person("John");




// 5. Explicit Binding (call, apply, bind)
// You can force a function to use a specific object as this using explicit built-in methods:
// call(): Runs the function immediately, accepting arguments one by one.
// apply(): Runs the function immediately, accepting arguments as an array.
// bind(): Returns a new copy of the function with the fixed this context to run later.

// function introduce(location) {
//   console.log(`I am ${this.name} from ${location}`);
// }

// const admin = { name: "Sarah" };

// introduce.call(admin, "London");      // Immediate execution
// introduce.apply(admin, ["New York"]); // Immediate execution with array
// const fixedIntro = introduce.bind(admin, "Tokyo"); // Returns function
// fixedIntro();


// const obj = {
//     firstName: 'Amit',
//     age: 21,
//     getCompany: function () {
//         const companyInfo = {
//             firstName: 'Anshu',
//             isGood: true,
//         //     greet: function () {
//         //         console.log(this.firstName);               
//         //     }
//         // }
//             greet:  ()=> {
//                 console.log(this.firstName);               
//             }
//         }
//         companyInfo.greet()
//     }
// }
// obj.getCompany()















//Setup Example Code for call() , apply() and bind()


// // .call() - call runs the function right away. You pass the object you want to use as this first, followed by individual arguments separated by commas.
// const user = {
//   firstName: "Virat",
//   lastName: "kohli"
// };

// function introduce(greeting, punctuation) {
//   console.log(`${greeting}, I am ${this.firstName} ${this.lastName}${punctuation}`);
// }

// introduce.call(user,'Hello','!')







// //apply() Method - apply works exactly like call and executes immediately. The only difference is that it accepts additional arguments inside a single array.
// // Syntax: function.apply(thisArg, [arg1, arg2, ...])
// introduce.apply(user, ["Welcome", "."]); 

// // Output: Welcome, I am Virat kohli.






// //.bind() - bind does not call the function right away. Instead, it duplicates the function and links it permanently to the object you provided. You can invoke it whenever you need it in the future.

// // Syntax: const newFunc = function.bind(thisArg, arg1, arg2, ...)
// const greetVirat = introduce.bind(user);

// // You can call it later
// greetVirat("Hey", " ??"); 

// // Output: Hey, I am Virat kohli??







//Prototype and __proto__ in js

function Car(brand) {
    this.brand = brand;
}


// Adding a method to the blueprint (prototype)
Car.prototype.startEngine = function() {
    console.log(this.brand + " engine started... Vroom vroom!");
};

const myCar = new Car("Tata Harrier");
myCar.startEngine(); // Output: Tata Harrier engine started... Vroom vroom!

// Here, myCar's __proto__ points to Car's prototype
console.log(myCar.__proto__ === Car.prototype); // true


