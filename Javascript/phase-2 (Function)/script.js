// Ask user to input a number and print table of that number
// let num = Number(prompt("Enter Number for a Table"));
// let start = 1;
// let upto = 20;
// while (start <= upto) {
//   console.log(`${num} X ${start} = ${num * start}`);
//   start++;
// }

// do {
//   var password = Number(prompt("Enter password"));
// } while (password != "123");
// console.log("Welcome in Application 🧑🏻‍💻");


// //Print even numbers using continue and for loop
// debugger  //debugger for understanding the flow and logic
// for(let a =1 ; a<=10;a++){

//   if(a%2 != 0){
//     continue
//   }
//   console.log(a);
//   a++ 

// }

// //Function declaration
// function abc(a){
//     console.log("This is function declaration",a);
// }

// //Function Expression
// const funExp = function(){
// console.log("This is Function Expression");
// }

// //Arrow Function 
// const arrFun = (a,b)=> {
//     console.log("This is Arrow Function",a,b);
// }

// const singleLineArrFun = ()=> console.log("This is single line arrow function");


// //IIFE --> Immediately Invoked function expression

// // Syntax
// (function(){
//     console.log("This is IIFE");
// })()

// //single line IIFE
// (()=> console.log("This is single line IIFE"))




// // Function without return
// function permission(gender) {


//     if (gender == 'M') {
//        console.log("Only Mens are allowed in this Party");
//     }
//     else if (gender == 'F') {
//         console.log("Only Females are allowed in this Party");
//     }
//     else {
//        console.log("You are in others category");
//     }
// }

// console.log(permission('F'));



// // Function with return
// function permission(gender) {
//     if (gender == 'M') {
//         return "Only Mens are allowed in this Party"
//     }
//     else if (gender == 'F') {
//         return "Only Females are allowed in this Party"
//     }
//     else {
//         return "You are in others category"
//     }
// }
// console.log(permission('F'));


//pure function
// function add(a, b) {
//     c = a + b
//     return c
// }
// console.log(add(10,20));


// //impure function
// var a  = 10 
// function abc(){
//     a++
//     return a
// }
// console.log(abc());


// //default parameter in function
// const userInfo = (userName = 'Raghav',age = 25)=>{

//     console.log(`Welcome`,userName, `Sir 👋🏻` , `your age is :`,age);

// }
// userInfo() //by default use Raghav as userName and age  25
// userInfo('Aniket',23)








