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
            <button class="btn complete">Complete</button>
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

//Mark as Completed
todoBox.addEventListener('click', (e) => {
  if (!e.target.classList.contains('complete')) return

  const li = e.target.closest('.li')
  const h3 = li.querySelector('h3')

  h3.classList.toggle('completed')

  if (h3.classList.contains('completed')) {
    e.target.textContent = 'Completed'
    e.target.style.backgroundColor = "green"
    e.target.style.color = "white"

  } else {
    e.target.textContent = 'Complete'
  }
})