//Practice code are given Below



// greet(); // Throws a ReferenceError (if using const) or TypeError (if using var)

// const greet = () => {
//     console.log("Hi!");
// };



const globalVar = "I am global";

function outerFunction() {
  const outerVar = "I am outside";

  function innerFunction() {
    const innerVar = "I am inside";
    
    // innerFunction can see its own scope, its parent's scope, and the global scope
    console.log(innerVar);  // Works
    console.log(outerVar);  // Works
    console.log(globalVar); // Works
  }

  innerFunction();
  
}
// outerFunction CANNOT see inside innerFunction
// console.log(innerVar); -> ReferenceError: innerVar is not defined
// console.log(outerVar); -> ReferenceError: outerVar is not defined


outerFunction();

