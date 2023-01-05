

const newToDoItem = document.querySelector("#new-todo-input")
const submitBttn = document.querySelector("#new-todo-submit")
const listItems = document.querySelector(".tasks")


submitBttn.addEventListener('click', addToDo)

function addToDo(event) {
    event.preventDefault()
    let newTask = newToDoItem.value

// creating a tag for new task
    let newItem = document.createElement("input")
    newItem.id = "new-item"
    newItem.innerHTML = newTask

//edit new task
    const editBttn = document.createElement("button")
    editBttn.id = "edit-button"
    editBttn.innerHTML = "Edit"
    editBttn.addEventListener("click", function editButton(event) {
        event.preventDefault()
        if (editBttn.innerHTML == "Edit") {
            itemDiv.removeAttribute("readonly", "readonly")
            editBttn.innerHTML = "Save"
        } else {
            editBttn.innerHTML = "Edit"
            itemDiv.setAttribute("readonly", "readonly")
        }
    })

//delete new task
    const deleteBttn = document.createElement("button")
    deleteBttn.id = "delete-bttn"
    deleteBttn.innerHTML = 'Delete'
    deleteBttn.addEventListener("click", function deleteToDo(event) {
        event.preventDefault()
        listItemsDiv.remove()
    })

    const listItemsDiv = document.createElement("div")
    listItemsDiv.id = "items-div"

    const itemDiv = document.createElement("input")
    itemDiv.className = "new-tasks"
    itemDiv.type = "text"
    itemDiv.setAttribute("readonly", "readonly")
    itemDiv.placeholder = newTask

    if (!newTask == "") {
        listItems.append(listItemsDiv)
        listItemsDiv.append(itemDiv, editBttn, deleteBttn)

    } else {
        alert("Please enter a task")
    }
}


