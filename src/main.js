

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
            itemDiv.removeAttribute("readonly", "readonly")
            editBttn.innerHTML = "Save"
    })

//delete new task
    const deleteBttn = document.createElement("button")
    deleteBttn.id = "delete-bttn"
    deleteBttn.innerHTML = 'Delete'
    deleteBttn.addEventListener("click", function deleteToDo(e) {
        e.preventDefault()
        listItems.removeChild()

    })

// appending new task to div 
// need to make an adjustment to this. 
    const itemDiv = document.createElement("input")
    itemDiv.className = "new-tasks"
    itemDiv.type = "text"
    itemDiv.setAttribute("readonly", "readonly")
    itemDiv.placeholder = newTask

    //listItems.append(itemDiv, editBttn, deleteBttn)

    if (!newTask == "") {
        listItems.append(itemDiv, editBttn, deleteBttn)
    } else {
        alert("Please enter a task")
    }

    

}

