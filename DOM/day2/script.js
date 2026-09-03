// console.log(document.body.childNodes);
// console.log(document.body.children);


// const main = document.querySelector("main")
// console.dir(main);  //you can see the childnodes and children in main object or you can access by using childNodes or children method with main

// // for example
// console.log(main.childNodes); // NodeList(3) [text, h1, text]
// console.log(main.children);  // HTMLCollection [h1]



const h1 = document.querySelector('h1')
h1.textContent = 'hehe me change ho gya via js 🤡'

const h2 = document.querySelector('h2')
const body = document.body;

// The primary difference lies in how they read and write content regarding HTML tags, CSS visibility, and performance:
// 1. innerHTML returns or sets the actual HTML markup inside an element, meaning it parses tags like <strong> or <div>.
// 2. innerText returns only the visible, human-readable text as it appears on screen, respecting CSS styling (like display: none).
// 3. textContent returns the raw text of all nodes inside the element, including hidden text, script contents, and spacing, but entirely ignoring the HTML tags themselves.


// When writing content:
h2.textContent = "<b>Bold</b>" // or innerText will display the literal string "<b>Bold</b>" as text on the screen, treating the brackets as safe strings.
h2.innerHTML = "<b>Bold <i> or ye italic ho gya</i></b>" // will actually render Bold text on the browser screen.element.

console.log(body.innerText); //give only text
console.log(body.textContent); //gives text and maintain structure as well

h1.style.color = "white"
h1.style.fontSize = "50px"
h1.style.fontStyle = "italic"
h1.style.backgroundColor = "black"








