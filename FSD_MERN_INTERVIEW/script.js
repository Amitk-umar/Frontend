// console.log("Amit"-100)

//spread operator
// let arr = [1,2,3,4]
// let arr2 = [...arr,5,6,7,8,9]
// console.log(arr2)





// let arr = [1, 2, 4, 'a', 'm', 'i', 't', 'raghav'];
// let numArr = [];
// let chArr = [];
// let restArr = [];
// arr.forEach((val) => {

//     if (typeof (val) === 'number') {
//         numArr.push(val)
//     }
//     else if (typeof (val) === 'string' && val.length === 1) {
//         chArr.push(val)
//     }
//     else if (typeof (val) === 'string' && val.length > 1) {
//         restArr.push(val)
//     }
// });

// console.log("Number Array : ", numArr)
// console.log("Character Array : ", chArr)
// console.log("String Array : ", restArr)





//adding 5 to all element in array
// let arr = [1, 2, 3, 4, 5]
// arr.forEach((val) => {
//     val += 5
//     console.log(val)
// })





// //sum  of array
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach((val) => {
//     sum += val
// })
// console.log(sum)






// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.filter((val) => val < 5)
// console.log(arr2)  //[ 1, 2, 3, 4 ]

// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.map((val) => val < 5)
// console.log(arr2)  //[ true, true, true, true, false ]

// let arr = [1, 2, 3, 4, 5]
// let arr2 = arr.map((val) => val = 5)
// console.log(arr2)  // [ 5, 5, 5, 5, 5 ]





// // Add all elements of an Array
// let arr = [10, 20, 30, 40, 50]
// let resultedValue = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)
// console.log(resultedValue) //150





let arr = [10,[99],20,30,[50,55],40]
let flatenedArr = arr.flat()
console.log(flatenedArr) //[10, 99, 20, 30,50, 55, 40]

