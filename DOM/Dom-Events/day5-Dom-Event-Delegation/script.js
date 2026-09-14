// const main = document.querySelector('main')
// main.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log(e.target);
// })


// Math.floor() rounds a number down to the largest integer less than or equal to that number, while Math.ceil() rounds a number up to the smallest integer greater than or equal to that number.





const main = document.querySelector('main')
const box = document.querySelector('.box')
const btn = document.querySelector('button')
const timer = document.querySelector('#timer')

let count = 0;
let interval;

btn.addEventListener('click', () => {

    // const x = Math.floor(Math.random() * 100) + 1;
    // const y = Math.floor(Math.random() * 100) + 1;

    // box.style.top = `${x}%`;
    // box.style.left = `${y}%`;


    //😁 Aur poora box andar rakhna ho → parent size − box size calculate karo. 💯

    // clientWidth  → element ki andar wali width
    // clientHeight → element ki andar wali height
    // offsetWidth → element ki total visible width batata hai.
    // offsetHeight → element ki total visible Height batata hai.

    interval = setInterval(() => {

        const maxX = main.clientWidth - box.offsetWidth;
        const maxY = main.clientHeight - box.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        box.style.left = `${x}px`;
        box.style.top = `${y}px`;

        count += 1;

        console.log(count);

        timer.textContent = count;


    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
    }, 10000);

});

