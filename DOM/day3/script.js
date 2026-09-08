// Difference between an "attribute" and a "property" in the DOM

// Attributes are defined in the HTML markup and provide initial values for elements. They are static and do not change once the page is loaded unless explicitly modified using JavaScript.

// Properties are part of the DOM and represent the current state of an element. They are dynamic and can change as the user interacts with the page or through JavaScript.

// example  : width = 200px ;       [width = Attribute and Property = 200px ]

// const p= document.querySelector("#uid")

// const setClass = p.setAttribute("class","c1 c2 c3")

// const removeClass = p.removeAttribute("class")

// const getClass = p.getAttribute("class")

// const hasClass = p.hasAttribute("class") 
// console.log(hasClass); //false

// console.log(getClass); //null



// //valid custom attribute with data- and update with dataset using method with camelcase property
// const userCard = document.querySelector("#user-card")
// console.log(userCard.getAttribute('data-user-id')); //123
// userCard.dataset.userId = "9300"
// console.log(userCard.getAttribute('data-user-id')); //9300





// //input.value VS input.getAttribute

// const inp = document.querySelector("input")
// const btn = document.querySelector("button")

// btn.addEventListener("click", () => {

//     console.log('this is input.value : ', inp.value); //this is live
//     console.log('this is via Attribute :', inp.getAttribute("value"));  //but this static ,the value we give in input tag in html
// })




// //creating , inserting(appending) and removing element from dom

// const main = document.querySelector('main')
// //createElement
// const footer = document.createElement('footer')
// const span = document.createElement('span')
// span.innerHTML =  'hello , i am created <i>dynammically</i>'
// //inserting (appending)
// // 1.appendChild() - old [Insert only a single element at a time]
// // 2.append()  - new  [insert multiple element at a time ]

// // main.appendChild(footer,span) //adding only footer not span element
// main.append(footer,span)  //adding both elements

// // main.removeChild(span)


// old api
// appendchild()
// insertBefore()
// removechild()


// new api
// append()
// prepend()
// before()
// after()
// replacewith()




// //insertBefore() ---    

const main = document.querySelector('main')
// const box1 = document.querySelector('.box1')
// const box2 = document.querySelector('.box2')
// const box3 = document.querySelector('.box3')

// box2.style.backgroundColor = "yellow"
// box3.style.backgroundColor = "blue"
// main.insertBefore(box2,box1)



const box1  = document.createElement('div')
const box2  = document.createElement('div')
const box3  = document.createElement('div')

box1.classList.add('box')

box2.classList.add('box')
box2.style.backgroundColor = "yellow"

box3.classList.add('box')
box3.style.backgroundColor = "blue"

main.append(box1,box2) //red yellow
// main.prepend(box3)  //sabse pehle add karta hai

// box1.before(box2) //yellow red

// box2.after(box1) //yellow red

main.replaceChild(box3,box1)  //blue yellow
box3.replaceWith(box1) //red yellow

