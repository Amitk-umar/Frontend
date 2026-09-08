const input = document.querySelector('input')
const add = document.querySelector('#add')
const todoBox = document.querySelector('.todo-list')

add.addEventListener('click', () => {
  const value = input.value;
if(value.trim() === "") return;

  todoBox.innerHTML += `  <div class="li">
          <h3>${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>
        </div>`

input.value =""; 

})


const edit = document.querySelector('.edit')
console.log(edit);