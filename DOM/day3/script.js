// Difference between an "attribute" and a "property" in the DOM

// Attributes are defined in the HTML markup and provide initial values for elements. They are static and do not change once the page is loaded unless explicitly modified using JavaScript.

// Properties are part of the DOM and represent the current state of an element. They are dynamic and can change as the user interacts with the page or through JavaScript.

// example  : width = 200px ;       [width = Attribute and Property = 200px ]

const p= document.querySelector("#uid")

const setClass = p.setAttribute("class","c1 c2 c3")

const removeClass = p.removeAttribute("class")

const getClass = p.getAttribute("class")

const hasClass = p.hasAttribute("class") 
console.log(hasClass); //false

console.log(getClass); //null