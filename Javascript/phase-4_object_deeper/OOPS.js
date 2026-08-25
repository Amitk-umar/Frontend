console.log("---------------------OOPS IN JS---------------------------");


//Constructor Function - to multiple instances from a object
// A constructor function is a regular JavaScript function used as a blueprint to create multiple similar objects.It allows you to define a structure once and stamp out new objects with the same properties and methods.


function CreateBook(bookName,author,pages){
    this.bookName = bookName ,
    this.author = author , 
    this.pages = pages , 
    this.frontPage = function(){
        console.log('Book Name : ', this.bookName);
        console.log('Author Name : ' , this.author);
        console.log('Pages : ',this.pages);
    }
}
let book1 =  new CreateBook('The Great Gatsby','F. Scott Fitzgerald',180)
// console.log(book1.bookName); //The Great Gatsby

let book2 = new CreateBook('To Kill a Mockingbird','Harper Lee',324)
// console.log(book2.author); //Harper Lee

let book3 = new CreateBook('Pride and Prejudice','Jane Austen',279 )
// console.log(book3.bookName); //Pride and Prejudice

book1.frontPage() //Book Name :  The Great Gatsby Author Name :  F. Scott Fitzgerald Pages :  180


//Example of getting Student Detail
function MakeStudents(fname, lname, contact, isVerified) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.isVerified = isVerified;
    this.showProfile = function () {
        if (this.isVerified) {
            console.log(`Name: ${this.fname} ${this.lname}, Contact: ${this.contact}`);
        }else{
            console.log('User Not Verified');
        }
    }
}

let s1 = new MakeStudents('Abhishek', 'Mishra', 98765, true)
let s2 = new MakeStudents('Yash', 'Yadav', 545454, true)
let s3 = new MakeStudents('Manas', 'Pancholi', 233422, false)
let s4 = new MakeStudents('Anurag', 'Kulshreshtha', 765656, true)

s4.showProfile()
