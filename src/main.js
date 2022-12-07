

const newToDoItem = document.querySelector("#new-todo-input")
const submitBttn = document.querySelector("#new-todo-submit")
const listItems = document.querySelector(".tasks")


submitBttn.addEventListener('click', addToDo)

function addToDo(event) {
    event.preventDefault()
    console.log(newToDoItem.value)
    const newTask = newToDoItem.value

    const newItem = document.createElement("p")
    newItem.id = "new-item"
    newItem.innerHTML = newTask

    const deleteBttn = document.createElement("button")
    deleteBttn.id = "delete-bttn"
    deleteBttn.innerHTML = 'Delete'
    deleteBttn.addEventListener("click", function deleteToDo(e) {
        e.preventDefault()
        itemDiv.remove()
})

    const itemDiv = document.createElement("div")
    itemDiv.className = "new-tasks"

    listItems.appendChild(itemDiv)
    itemDiv.append(newItem, deleteBttn)
}

