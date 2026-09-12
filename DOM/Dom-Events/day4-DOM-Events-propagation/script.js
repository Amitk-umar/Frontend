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

// const btn = document.querySelector('button')
// const div = document.querySelector('div')
// const main = document.querySelector('main')
// const body = document.body
// const html = document.html

// btn.addEventListener('click', () => {
//     console.log('btn trigered');
// }, { capture: true })
// div.addEventListener('click', () => {
//     console.log('div trigered');
// }, { capture: true })
// body.addEventListener('click', () => {
//     console.log('body trigered');
// }, { capture: true })
// main.addEventListener('click', () => {
//     console.log('main trigered');
// }, { capture: true })


// // window - doctype - html - body - main - div - btn  [capturing]
// //btn - div - main - body - html - doctype - window  [bubbling]







//mini project -  adding multiplle profile cards using Array of json data with the help of eventlistener


//Submit Event - form pe lagta hai and make sure submit button form ke ander ho
const form = document.querySelector('form');
const input1 = document.querySelector('#name');
const input2 = document.querySelector('#email');
const users = document.querySelector('.users');
const image = document.querySelector('#imgurl');

let userData = [
  {
    id: 1,
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    imageurl: 'https://i.pravatar.cc/150?img=12',
    dob: '1998-04-17'
  },
  {
    id: 2,
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    imageurl: 'https://i.pravatar.cc/150?img=47',
    dob: '2001-09-23'
  },
  {
    id: 3,
    name: 'Ryan Mitchell',
    email: 'ryan.mitchell@example.com',
    imageurl: 'https://i.pravatar.cc/150?img=33',
    dob: '1995-12-08'
  },
  {
    id: 4,
    name: 'Sophia Patel',
    email: 'sophia.patel@example.com',
    imageurl: 'https://i.pravatar.cc/150?img=44',
    dob: '2000-06-15'
  },
  {
    id: 5,
    name: 'Daniel Carter',
    email: 'daniel.carter@example.com',
    imageurl: 'https://i.pravatar.cc/150?img=68',
    dob: '1997-02-28'
  }
];


// Ye batayega ki kaunsa user edit ho raha hai
let editIndex = null;


const ui = () => {

  users.innerHTML = '';

  userData.forEach((elem, index) => {

    users.innerHTML += `
      <div class="user-card">

        <div class="image">
          <img
            src="${elem.imageurl}"
            alt="image"
          />
        </div>

        <div class="text">
          <h3>Name - ${elem.name}</h3>
          <p>Email - ${elem.email}</p>
          <p>DOB - ${elem.dob}</p>
        </div>

        <div class="modify">
          <button  id="edit" onclick="editCard(${index})">Edit</button>
          <button id="del" onclick="deleteCard(${index})">Delete</button>
        </div>

      </div>
    `;
  });
};


ui();


// Form submit
form.addEventListener('submit', (events) => {

  events.preventDefault();

  let name = input1.value;
  let email = input2.value;
  let imageUrl = image.value;

  if (name.trim() === '' || email.trim() === '') return;


  // Agar editIndex null nahi hai
  // iska matlab existing user edit ho raha hai
  if (editIndex !== null) {

    userData[editIndex].name = name;
    userData[editIndex].email = email;
    userData[editIndex].imageurl = imageUrl;

    // Editing complete
    editIndex = null;

  } else {

    // Naya user add hoga
    userData.push({
      id: userData.length + 1,
      name: name,
      email: email,
      imageurl: imageUrl
    });

  }

  ui();
  form.reset();

});


// Edit button
const editCard = (index) => {

  // Sabse important line
  editIndex = index;

  input1.value = userData[index].name;
  input2.value = userData[index].email;
  image.value = userData[index].imageurl;

};


// Delete button
const deleteCard = (index) => {

  userData.splice(index, 1);

  ui();

};