console.log("---------------------OOPS IN JS---------------------------");


//Constructor Function - to multiple instances from a object
// A constructor function is a regular JavaScript function used as a blueprint to create multiple similar objects.It allows you to define a structure once and stamp out new objects with the same properties and methods.


// function CreateBook(bookName, author, pages) {
//     this.bookName = bookName,
//         this.author = author,
//         this.pages = pages,
//         this.frontPage = function () {
//             console.log('Book Name : ', this.bookName);
//             console.log('Author Name : ', this.author);
//             console.log('Pages : ', this.pages);
//         }
// }
// let book1 = new CreateBook('The Great Gatsby', 'F. Scott Fitzgerald', 180)
// // console.log(book1.bookName); //The Great Gatsby

// let book2 = new CreateBook('To Kill a Mockingbird', 'Harper Lee', 324)
// // console.log(book2.author); //Harper Lee

// let book3 = new CreateBook('Pride and Prejudice', 'Jane Austen', 279)
// // console.log(book3.bookName); //Pride and Prejudice

// book1.frontPage() //Book Name :  The Great Gatsby Author Name :  F. Scott Fitzgerald Pages :  180


//Example of getting Student Detail - prototypal inheritance

// function MakeStudents(fname, lname, contact, isVerified) {
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.isVerified = isVerified;
// }
// let showProfile = function () {
//     if (this.isVerified) {
//         console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
//     } else {
//         console.log('User Not Verified');
//     }
// }
// MakeStudents.prototype.showProfile = showProfile

// MakeStudents.prototype.company = 'Google'

// let s1 = new MakeStudents('Abhishek', 'Mishra', 98765, true)
// let s2 = new MakeStudents('Yash', 'Yadav', 545454, true)
// let s3 = new MakeStudents('Manas', 'Pancholi', 233422, false)
// let s4 = new MakeStudents('Anurag', 'Kulshreshtha', 765656, true)
// console.log(s1.company);  //Google 


// console.log('------------------ Class And  Constructor --------------------');




// //Class and Constructor
// class MakeStudents {
//     constructor(fname, lname, contact, isVerified) {
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//         this.isVerified = isVerified ;
//     }
//     showProfile = function () {
//          if (this.isVerified) {
//              console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
//          } else {
//              console.log('User Not Verified');
//          }
//      }
// }

// let s1 = new MakeStudents('Amit', 'kumar', 98789, true)
// let s2 = new MakeStudents('Abhishek', 'Mishra', 77889, true)
// let s3 = new MakeStudents('Yash', 'Yadav', 48789, false)

// s1.showProfile()
// s2.showProfile()
// s3.showProfile()




//Another example of Class And Constructor

// 1. Defining the Class
// class Car {
//     // 2. The Constructor
//     constructor(company,model,year) {
//         this.company = company;
//         this.model = model;
//         this.year = year;
//     }
//     // 3. A Class Method (Behavior)
//     startEngine() {
//         console.log(`The ${this.year} ${this.company} ${this.model}'s engine is running.`);
//     }
// }
// // 4. Creating Instances using the 'new' keyword
// const myCar = new Car("Toyota", "Corolla", 2024);
// const yourCar = new Car("Honda", "Civic", 2023);

// myCar.startEngine()     




// //ES6 Classes Example  - Classical inheritance
// class User {
//     constructor(fname, lname, contact) {
//         this.fname = fname
//         this.lname = lname
//         this.contact = contact
//     }
//     greet() {
//         console.log('Welcome', this.fname);
//     }
// }

// class Admin extends User {
//     constructor(fname, lname, contact) {
//         super(fname, lname, contact)
//         this.adminAccess = true
//     }
//     addCourse() {
//         console.log('New Course Added');
//     }
//     removeAllCourses() {
//         console.log('All Courses Removed');
//     }
// }

// var u1 = new User('Harsh', 'Singh', 887867)
// var u2 = new Admin('Sarthak', 'Sharma', 5432)

// u1.greet()
// u2.greet()
// u2.addCourse()
// u2.removeAllCourses()








//static methods and static properties

class Car {
  // 1. STATIC PROPERTY (Factory ka data)
  // Ye kisi ek car ka nahi, puri class ka data hai.
  static totalCarsMade = 0;
  static factoryLocation = "Delhi, India";

  constructor(brand, color) {
    // 2. NORMAL PROPERTIES (Actual Car ka data)
    this.brand = brand;
    this.color = color;
    
    // Jab bhi nayi car banegi, hum factory ka counter +1 kar denge
    Car.totalCarsMade++; 
  }

  // 3. NORMAL METHOD (Actual car action karegi)
  drive() {
    return `Meri ${this.color} ${this.brand} chal rahi hai! Vroom!`;
  }

  // 4. STATIC METHOD (Factory ka action)
  // Ise call karne ke liye actual car ki zarurat nahi hai.
  static getFactoryInfo() {
    return `Ye factory ${this.factoryLocation} mein hai aur abhi tak ${this.totalCarsMade} cars bana chuki hai.`;
  }
}

// --- ISTEMAAL KAISE KAREIN ---

// A. STATIC CHEEZEIN SEEDHA CLASS KE NAAM SE CALL HOTI HAIN
console.log(Car.factoryLocation); // Output: "Delhi, India"
console.log(Car.getFactoryInfo()); // Output: Ye factory Delhi, India mein hai aur abhi tak 0 cars bana chuki hai.

// B. NORMAL CHEEZEIN NAYI CAR (OBJECT) BANAKAR CALL HOTI HAIN
const meriCar = new Car("Swift", "Red");
const dostKiCar = new Car("Honda City", "Black");

console.log(meriCar.drive()); // Output: "Meri Red Swift chal rahi hai! Vroom!"

// C. CHECK KARTE HAIN TOTAL CARS KITNI BANI (STATIC PROPERTY)
console.log(Car.totalCarsMade); // Output: 2
