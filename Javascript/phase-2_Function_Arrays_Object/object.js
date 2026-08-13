//Object -
//An object in JavaScript is a standalone entity that stores data as a collection of properties (key-value pairs). Properties can hold any data type, including strings, numbers, arrays, or functions (which are called methods).

//Syntax
// const user = {
//   name: "Alex",
//   age: 25,
//   city: 'Delhi'
// };
// console.log(user);


//CRUD Operations on JavaScript Objects

// // 1. Create (Adding Properties)
// const laptop = {}; // Empty object

// // Dot notation
// laptop.brand = "Apple";

// // Bracket notation (useful for keys with spaces)
// laptop["model name"] = "MacBook Pro"; 
// laptop.price = 1200;



// //2. Read (Accessing Properties)
// const laptop = { brand: "Apple", price: 1200 };

// // Dot notation
// console.log(laptop.brand); // Output: Apple

// // Bracket notation
// console.log(laptop["price"]); // Output: 1200



// //3. Update (Modifying Properties)
// const laptop = { brand: "Apple", price: 1200 };

// // Modifying the price
// laptop.price = 1400; 

// console.log(laptop.price); // Output: 1400



// //4. Delete (Removing Properties)
// const laptop = { brand: "Apple", price: 1400 };

// // Deleting the price property
// delete laptop.price; 

// console.log(laptop); // Output: { brand: "Apple" }
// console.log(laptop.price); // Output: undefined





//⭐ To get only the keys or only the values from a JavaScript object, use the built-in methods Object.keys() and Object.values(). Both methods return a standard array that you can easily loop through or manipulate.



// // 1. Get Only the Keys (Object.keys())
// const keys = Object.keys(smartphone);

// console.log(keys);
// // Output: ['brand', 'model', 'price', 'storage']

// // Example use case: Finding the total number of properties
// console.log(`The object has ${keys.length} specifications.`); 
// // Output: The object has 4 specifications.




// // 2. Get Only the Values (Object.values())
// const values = Object.values(smartphone);

// console.log(values);
// // Output: ['Samsung', 'Galaxy S26', 999, '256GB']

// // Example use case: Checking if a specific value exists
// const hasHighStorage = values.includes("256GB");
// console.log(hasHighStorage); 
// // Output: true



// Object.entries() -  The Object.entries() MDN Web Docs method takes an object and converts it into a two-dimensional array of [key, value] pairs. It is heavily used for looping over objects with array methods.

// const friendStatus =  {
//    Name:'Ankit Jangir',
//     Age : 23,
//     city : "Ayodhya",
//     isMarried  : true
// }
// console.log(friendStatus); //{Friend Name: 'Ankit Jangir', Age: 23, city: 'Ayodhya', isMarried: true}
// console.log(Object.entries(friendStatus)); //(4) [Array(2), Array(2), Array(2), Array(2)]

// // Common use case: Looping with destructuring
// for(const [key,value] of Object.entries(friendStatus)){
//     console.log(`Key : ${key} And Value : ${value}`);
// }




// const company = {
//     name: "TechCorp",
//     // Nested Object
//     location: {
//         city: "Switzerland",
//         country: "Europe"
//     },
//     // Nested Array containing objects
//     employees: [
//         { id: 1, name: "Bhola", role: "Developer" },
//         { id: 2, name: "jackson", role: "Designer" }
//     ]
// };
// console.log(company.location.city); //Switzerland
// console.log(company.employees[0].name); //Bhola



// <--------------------- 12/08/2026 ---------------------------->

// // Seal method in object ->  not create or add  and delete , only update
// const groom = {
//   name: "Ankit",
//   age: 23,
// };
// const bride = {
//   name: "Sakira",
//   age: 21,
// };
// Object.seal(groom);
// groom.name = "Raghav";// updated value from Ankit to Raghav

// groom["isSingle"] = true; //it can't add in object
// delete groom.age   //it cant't delete from object

// console.log(groom.name, "Weds", bride.name); //Raghav Weds Sakira   - with seal you can modify or update the element
// console.log(groom); //after  sealing you can not add element but wihtout sealing its can be add  element in object   output :   {name: 'Raghav', age: 23}





//Freeze method in object  - The Object.freeze() static method makes a JavaScript object completely immutable, providing the highest integrity level available in the language.Once an object is frozen using the  Object.freeze() method, external code cannot add new properties, delete existing properties, or change the values of any top-level properties.


// "use strict"; // Throws explicit errors on illegal mutations

// const user = {
//   name: "Bheem Singh",
//   role: "Admin",
// };

// // Freeze the object
// Object.freeze(user);

// // 1. Attempting to modify a property fails
// user.name = "Spiderman"; // TypeError in strict mode

// // 2. Attempting to add a property fails
// user.age = 25; // TypeError in strict mode

// // 3. Attempting to delete a property fails
// delete user.role; // TypeError in strict mode

// console.log(user); // {name: 'Bheem Singh', role: 'Admin'}









//———————————————————————————— Destructuring in JavaScript with Array And Objects ————————————————————————————

//Destructuring in JavaScript is a shorthand syntax that allows you to unpack values from arrays or properties from objects directly into distinct variables. This modern ES6 feature replaces verbose index-based or dot-notation assignments with a cleaner, highly readable structure.

// 1. Array Destructuring -> Array destructuring maps variables to values based on their position (index) within the array.

// const rgb = [255, 128, 0]
// const tenMultiples = [10, 20, 30, 40, 50, 60]
// // //The Traditional Way
// // const red = rgb[0]
// // const green = rgb[1]
// // const blue = rgb[2]
// // console.log(blue);

// // The Destructuring Way
// const [red, green, blue] = rgb
// console.log(red); //255
// console.log(green); //128
// console.log(blue); //0

// //Destructuring With rest operator (...)

// const [a, b, ...rest] = tenMultiples
// console.log(a); //10
// console.log(b); //20
// console.log(rest); // [30, 40, 50, 60]




//2. Object Destructuring - Object destructuring maps variables based on the exact property keys, meaning the order of extraction does not matter.

// const user = { id: 101, username: 'abhikansh', role: 'Admin', city: 'Ludhiana' };

// // // traditional way
// // const personName = user.username
// // const personId = user.id
// // console.log(personName); //abhikansh
// // console.log(personId); //101

// // The Destructuring Way
// const { username: personName, id: personId, ...rest } = user
// console.log(personName, personId, rest); //abhikansh 101 {role: 'Admin', city: 'Ludhiana'}





//🏆 The Ultimate Real-World Example

// Simulated API Response
const apiResponse = {
  status: "success",
  data: {
    profile: {
      firstName: "Bhavrattan",
      lastName: "Singh",
      email: "Bhavrattan@example.com"
    },
    scores: [95, 88, 91]
  }
};

// 1. Deep Nested & Rename Destructuring
const {
  data: {
    profile: { firstName: name }, // Digs deep and renames firstName to name
    scores: [topScore]            // Unpacks the very first element from the scores array
  } } = apiResponse;

console.log(name);     // Output: Bhavrattan
console.log(topScore); // Output: 95


// 2. Destructuring Directly in Function Parameters
// This pattern is incredibly popular in frameworks like React
function displayUser({ profile: { email }, status ="success"}) {
  console.log(`User email is ${email}. API Status: ${status}`);
}

// Pass the inner 'data' block or root response directly
displayUser(apiResponse.data); 
