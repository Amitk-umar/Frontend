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




const company = {
    name: "TechCorp",
    // Nested Object
    location: {
        city: "Switzerland",
        country: "Europe"
    },
    // Nested Array containing objects
    employees: [
        { id: 1, name: "Bhola", role: "Developer" },
        { id: 2, name: "jackson", role: "Designer" }
    ]
};
console.log(company.location.city); //Switzerland
console.log(company.employees[0].name); //Bhola



