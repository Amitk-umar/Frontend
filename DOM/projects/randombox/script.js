
const main = document.querySelector('main')
const btn = document.querySelector('button')
const timer = document.querySelector('#timer')
const overlay = document.querySelector('#overlay')
const box = document.createElement('div');

const scored = document.querySelector('#score')

box.classList.add('box');

let count = 0;
let interval;
let score = 0;
const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

let canClick = true;

const randomBox = () => {
    // New box = allow one new click
    canClick = true;

    box.style.backgroundColor = randomColor();

    main.append(box);

    const maxX = main.clientWidth - box.offsetWidth;
    const maxY = main.clientHeight - box.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
};

btn.addEventListener('click', () => {
    btn.style.display = 'none';

    randomBox();

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
        randomBox();
        count += 1;
        timer.textContent = count;

    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        overlay.style.display = 'flex';

    }, 10000);

    setTimeout(() => {
        overlay.style.display = 'none';
        count = 0;
        score = 0;
        timer.textContent = count;
        scored.textContent = score;

    }, 13000);


});


box.addEventListener('click', () => {

    if (!canClick) return;

    // This box has now been scored
    canClick = false;

    score += 1;
    scored.textContent = score;
});




