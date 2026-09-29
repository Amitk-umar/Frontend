const prompt = require('prompt-sync')();
// //check number is odd or even.
// let n = prompt("enter number : ")
// if (n % 2 == 0) console.log('even');
// else console.log('odd')




// //Take positive integer input and tell if it is divisible by 5 or not.
// let num = prompt('Enter number : ')
// if (num % 5 == 0) console.log(`${num} is divisble by 5`)
// else console.log(`${num} is not divisible by 5`);



// //take any number and make it absolute number
// let num = prompt("Enter Any number : ")
// // if (num >= 0) console.log(num);
// // else console.log(-num);
// if (num < 0) num = -num;
// console.log(num);




// //Ques: Take real number input and check if it is an integer or not.
// let num = Number(prompt("Enter real number : ")) //40.8
// let x = Math.trunc(num); 40
// if ((num - x) > 0) console.log(`${num} is integer.`);
// else console.log(`${num} is  not integer`);


// //Ques : If cost price and selling price of an item is input through the keyboard, write a program to determine whether the seller has made profit or incurred loss or no profit no loss. Also determine how much profit he made or loss he incurred.
// let cp = Number(prompt("Enter Cost Price : "))
// let sp = Number(prompt("Enter Selling Price : "))
// if (sp > cp) { console.log(`You Make Profit of Rs. ${sp - cp}`) }
// else if (sp < cp) { console.log(`You Got loss of Rs. ${cp - sp}`) }
// else console.log("No profit No Loss.")


// Ques.  Take length and breadth of rectangle as input and write a program to find whether the area of rectangle is greater than its perimeter.
// let l = Number(prompt("Enter lenght : "))
// let b = Number(prompt("Enter breadth : "))
// let areaOfRec = l * b;
// let perimeter = 2 * (l + b);
// if (areaOfRec > perimeter) console.log(`Area of reactangle is ${areaOfRec} which is greater than its perimeter which is ${perimeter}`);
// else console.log("area of rectangle not greater than its perimeter");




// //Ques : Take positive integer input and print  _________ if number is divisible by 5 _________ if number is divisible by 3________ if number is divisible by 5 & 3 both_________ if number is not divisible by 5 or 3 
// let a = Number(prompt("Enter positive interger : "))
// if (a % 5 == 0 && a % 3 == 0) console.log('number is divisible by 5 & 3 both')
// else if (a % 5 == 0) console.log('number is divisible by 5')
// else if (a % 3 == 0) console.log('number is divisible by 3')
// else console.log('number is not divisible by 5 or 3')




// // Ques. Given a point (x, y), write a program to find out if it lies in the 1st Quadrant, 2nd Quadrant, 3rd Quadrant, 4th Quadrant, on the x-axis, y-axis or at the origin. 
// let x = Number(prompt("Enter x : "));
// let y = Number(prompt("Enter y : "));
// if (x > 0 && y > 0) console.log("1st quadrant")
// else if (x < 0 && y > 0) console.log("2nd quadrant")
// else if (x < 0 && y < 0) console.log("3rd quadrant")
// else if (x > 0 && y < 0) console.log("4th quadrant")
// else if (y === 0 && x !== 0) console.log(`x-axis at (${x},${y})`);
// else if (x === 0 && y !== 0) console.log(`y-axis at (${x},${y})`);
// else console.log("at the origin. ");




// //Ques . find greatest in threee number
// let a = Number(prompt("Enter 1st no. :"));
// let b = Number(prompt("Enter 2nd no. :"));
// let c = Number(prompt("Enter 3rd no. :"));
// if (a >= b) {
//     if (a >= c) {
//         console.log(a);
//     }
//     else console.log(c);
// }
// else {
//     if (b >= c) {
//         console.log(b);
//     }
//     else {
//         console.log(c);
//     }
// }





