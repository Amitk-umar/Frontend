//there are multiple types of Events in dom
// 1. Mouse Event
// 2. Pointer Event
// 3. Keyboard Event
// 4. inputs Event
// 5. Submit Event

//Pointer Event - click
// const btn = document.querySelector('button')
// btn.addEventListener('click',(events)=>{
// // console.log(events);
// console.log('button triggered...');
// })

//Mouse Event - dblclick,mouseover,mouseleave,...
// const btn = document.querySelector('button')
// btn.addEventListener('dblclick',(events)=>{
// console.log('button trigered...');
// })

// //keyboard Event  - keypress,keydown,keyup,...
// const btn = document.querySelector('button')
// window.addEventListener('keypress',(events)=>{
// console.log(events);
// })

//Input Event - input
//Submit Event - submit-form




//Event propagation - event traversal

const btn = document.querySelector('button')
const div = document.querySelector('div')
const main = document.querySelector('main')
const body = document.body
const html = document.html

btn.addEventListener('click', () => {
    console.log('btn trigered');
}, { capture: true })
div.addEventListener('click', () => {
    console.log('div trigered');
}, { capture: true })
body.addEventListener('click', () => {
    console.log('body trigered');
}, { capture: true })
main.addEventListener('click', () => {
    console.log('main trigered');
}, { capture: true })


// window - doctype - html - body - main - div - btn  [capturing]
//btn - div - main - body - html - doctype - window  [bubbling]

