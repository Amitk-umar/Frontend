const input = document.querySelector('input')
const add = document.querySelector('#add')
const todoBox = document.querySelector('.todo-list')

add.addEventListener('click', () => {
  const value = input.value;
  if (value.trim() === "") return;

  todoBox.innerHTML += `  <div class="li">
          <h3>${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>
        </div>`

  input.value = "";

})

//delete
todoBox.addEventListener('click', (e) => {
  if (!e.target.classList.contains('del')) return
  else {
    e.target.closest('.li').remove()
  }
})

//edit
let editItem = null

todoBox.addEventListener('click', (e) => {

  if (!e.target.classList.contains('edit')) return

  editItem = e.target.closest('.li')

  const h3 = editItem.querySelector('h3')

  input.value = h3.textContent

  editItem.remove()
})