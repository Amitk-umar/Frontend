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

// var str = 'Sheryians coding school';
// var arr = str.split(' ')  ;
// console.log(arr);//(3) ['Sheryians', 'coding', 'school']

// var brr = arr[1].split('');
// console.log(brr); //(6) ['c', 'o', 'd', 'i', 'n', 'g']

// brr.reverse();
// console.log(brr); //(6) ['g', 'n', 'i', 'd', 'o', 'c']

// var str3 = brr.join(''); //'gnidoc'
// var str2 = arr.join(''); 
// console.log(str2);//'Sheryianscodingschool'


// <---------------------------join method in Array ---------------------------------->
// const elements = ['Fire', 'Air', 'Water'];

// // 1. Default (uses commas)
// console.log(elements.join());
// // Output: 'Fire,Air,Water'

// // 2. Custom string separator
// console.log(elements.join(' + '));
// // Output: 'Fire + Air + Water'

// // 3. Empty string separator (brings them completely together)
// console.log(elements.join(''));
// // Output: 'FireAirWater'

// // 4. Handling null or undefined values
// const mixed = ['Hello', null, 'World', undefined];
// console.log(mixed.join(' '));
// // Output: 'Hello  World ' (with empty gaps)




// <---------------------------------Refrence Behaviour in Array --------------------------------------------->


// // Reference Datatype -> for copying the array but not good - affect the original array
// var arr = [10,20,30]
// var arr2  = arr  //In JavaScript, an array is a reference data type, which means it stores a reference (memory address) pointing to where the actual data lives in the heap memory rather than storing the data directly inside the variable.
// arr[0]  = 80
// console.log(arr2);  //Output: [80, 20, 30]
// console.log(arr);   //Output: [80, 20, 30]


// // Original way for copying the array  --> not affecting the ori
// var arr = [10,20,30,40]
// var arr2 = [arr[0],arr[1],arr[2],arr[3]]
// arr2[0] = 77
// console.log(arr2); // Output: [77, 20, 30, 40]
// console.log(arr);  // Output : [10, 20, 30, 40]



// Correct way to clone using spread operator -->not affecting the original array
// var arr = [10, 20, 30, 40];
// var arr2 = [...arr]

// arr2.push(88)
// console.log(arr2); // Output: [10, 20, 30, 40,88]
// console.log(arr);  //output : [10,20,30,40]





//HOF - Higher order functions

//forEach  - Iteration

//map     -     Transform - it only checks condition is true or not in return and give output in [true or false] - if you write only return without any suffix then it gives you array with undefined value

//filter  -  filteration  - it checks condition is true or not in return and give output by giving elements- if you write only return without any suffix then it gives you  empty array

//reduce - to accumulate the value (provide a reduced single value)


// forEach Method in Array - it does not return anything gives undefined 
// const fruits = ['apple', 'banana', 'cherry'];
// fruits.forEach((element,index,array)=>{
//  console.log(`index ${index} : element ${element} (from array ${array})`);
// })



// //Sum of elements of an Array using foreach Method
// const array_1 = [10, 20, 30, 40, 50];
// let sum = 0
// array_1.forEach((element) => {
//     sum += element;
// })
// console.log(`Sum of all elements in Array is : ${sum}`);





//map Method  - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not change the original array.
// const array1 = [1,3,5,7,9,11]

// //double every number without return
// const doubled_numbers  = array1.map(num => num * 2)
// console.log(doubled_numbers); //(6) [2, 6, 10, 14, 18, 22]


// //double every number with return
// const array1 = [1, 3, 5, 7, 9, 11]
// const doubled_numbers = array1.map((num) => {
//     return num*2;
// })
// console.log(doubled_numbers); //(6) [2, 6, 10, 14, 18, 22]




//Filter Method

// //  Searching text (Sub-string matching)
// const fruits = ['Apple', 'Banana', 'Grapes', 'Mango'];
// const searchFruits = (query) => {
//     return fruits.filter(fruit => fruit.toLowerCase().includes(query.toLowerCase()));
// };
// console.log(searchFruits('an')); // ['Banana', 'Mango']


// //  Removing Duplicate Values
// const duplicates = [1, 2, 2, 3, 4, 4, 5];
// const unique = duplicates.filter((item, index, self) => self.indexOf(item) === index);
// console.log(unique); // [1, 2, 3, 4, 5]




//Reduce Method - The JavaScript reduce() method executes a user-provided callback function on each element of an array to combine them into a single output value. It processes the array elements from left to right, maintaining a running total or accumulated result along the way.
// 1 . accumulator: Stores the running result returned from the previous iteration.
// 2. currentValue: The current element being processed in the array.
// 3. initialValue (Optional): The value to initialize the accumulator. If omitted, the first element of the array becomes the accumulator, and iteration starts on the second element.


// //Basic Syntax 
// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   // Logic to transform and return the accumulator
// }, initialValue);


// //1. Summing an Array of Numbers
// const numbers  = [10,200,60,450,900]
// const sumArray = numbers.reduce((accumulator,currentValue)=>{
//    return accumulator + currentValue;
// },0)
// console.log(sumArray);



// //2. Flattening an Array of Arrays
// const nested = [[1, 2], [3, 4], [5, 6]];

// const flat = nested.reduce((accumulator, current) => {
//     // console.log(current);
//   return accumulator.concat(current);
// }, []);

// console.log(flat); // Output: [1, 2, 3, 4, 5, 6]


// //3. Counting Instances of Object Properties
// const  fruitBasket = ['apple','banana','orange' ,'apple','mango','banana','pineApple']
// const fruitCount = fruitBasket.reduce((accumulator,fruit)=>{
// accumulator[fruit]  = (accumulator[fruit] || 0 ) + 1;
// return accumulator
// },{})
// console.log(fruitCount);


