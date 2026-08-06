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







// callback function

// function userProcess(name,callback){
//     console.log("User processing : " + name);
//     callback(name)
// }
// function welcome(name){
//     console.log("hello, " + name);
// }
// userProcess("Ravi",welcome)



//second example
// function longestHighway(length,road){
//     console.log("Pan‑American Highway is the longest highway in the world with length of :",  length);

//     road("80m") //calling the callback function by 

// }
// function widthOfHighway(width){
//     console.log("the width of road is : " , width);

// }

// longestHighway("~48,000 km",widthOfHighway)









//Function as a first class citizen

// In JavaScript, functions are values, just like numbers or strings.
// This means you can:
// 1. store functions in variables.
// 2. Pass functions as arguments to other functions.
// 3. Return functions from other functions.


// 1. store functions in variables.
// const sayHii = () => {  
//     console.log("Hii , Myname is Amit kumar");
// }
// sayHii()


// 2. Pass functions as arguments to other functions.
// const myName  = ()=>{
//     return "Hello , "; //callback function
// }

// const greeting = (sayHii,name)=> {
//  console.log(sayHii() + name);
// }
// greeting(myName,"jashoo bhai") //passing function as an argument


// 3. Return functions from other functions.

// const makeGreeting = (greeting)=>{

//    return (name)=>{
//         console.log(greeting + ", " + name);
//     }
// }
// // 1st way
// // makeGreeting()(); //Hello undefined 

// // makeGreeting("Hello")("Amit Kumar") //Hello Amit Kumar 

// // 2nd way
// const  helloMessage = makeGreeting("Hello");
// helloMessage("Amit kumar");








//Arrays in JavaScript

// const arr = [10,20,"Ankit",55,59,"Raghav",878,356,"Ravi",112,40,"Amit kumar"]
// console.log(arr);   // (12) [10, 20, 'Ankit', 55, 59, 'Raghav', 878, 356, 'Ravi', 112, 40, 'Amit kumar']
// console.log(arr.length);  //12
// console.log(arr[0]);   //for getting first element in array
// console.log(arr[arr.length-1]);   //for getting last element in array
// arr[0] = 'jashan bhai'  //changing the array value
// console.log(arr[0]);  //jashan bhai

// arr.push('pushing element')
// console.log(arr);  //adding element at the end of array
// arr.pop()
// console.log(arr);  //removing element from the end of array

// arr.shift()  //removing element from the starting of the array
// console.log(arr);
// arr.unshift("add kar diya starting me"); //adding element at the starting of the array
// console.log(arr);




//storing even number in array using for loop and array method
// let arr = []
// for (let a = 1; a <= 100; a++) {
    //     if (a % 2 == 0) {
        //         arr.push(a)
        //     }
// }
// console.log(arr);



// Non-Mutating Methods (Return New Array)

// //slice method 
// let arr = [1, 2, 3, 4, 5];
// // let arr2 = arr.slice(1,4)  // [2,3]  exclude the last index element
// // console.log("Sliced Array :",arr2);


// //concat method
// let arr2 = [10,12,20,37]
// let arr3 = [45,64,78,90]
// console.log("concatenation of two arrays : " , arr2.concat(arr3)); //concatenation of two arrays : [10, 12, 20, 37, 45, 64, 78, 90]

// console.log(arr2.join("$ ")); //10$ 12$ 20$ 37




// <-------------Guess the Answer----------->

var str = 'Sheryians coding school';
var arr = str.split(' ')  ;
console.log(arr);//(3) ['Sheryians', 'coding', 'school']

var brr = arr[1].split('');
console.log(brr); //(6) ['c', 'o', 'd', 'i', 'n', 'g']

brr.reverse();
console.log(brr); //(6) ['g', 'n', 'i', 'd', 'o', 'c']

var str3 = brr.join(''); //'gnidoc'
var str2 = arr.join(''); 
console.log(str2);//'Sheryianscodingschool'




