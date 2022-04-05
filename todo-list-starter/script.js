let todoTaskText = [];
let todoTaskStatus = [];






function addTask() {
  let newTask = document.getElementById("new-task-text");
  if (newTask.value) {
    todoTaskText.push(newTask.value);
    todoTaskStatus.push(false);
    newTask.value = "";
    updateTodoList();
  }
}

function updateTodoList() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  todoTaskText.forEach((task, index) => {
    let newTodoTaskElement = createNewTodoItemElement(task, index);
    todoList.appendChild(newTodoTaskElement);
  });
}

// function moveUp(index) {
//     let moveUpBottom;
//     console.log("button - move up");
// }

function createNewTodoItemElement(task, index) {
  let newTodoTaskTextElement = document.createElement("p");
  newTodoTaskTextElement.innerText = task;

  if (todoTaskStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
  }

  let newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newTodoTaskTextElement);

  let completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Completed";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  newTodoTaskElement.appendChild(completeButtonElement);
  
  let moveUpBottonElement = document.createElement("input");
  moveUpBottonElement.type = "button";
  moveUpBottonElement.value = "Up";
  moveUpBottonElement.onclick = function () {
      move(index, - 1);
};
newTodoTaskElement.appendChild(moveUpBottonElement);

  
  let moveDownBottonElement = document.createElement("input");
  moveDownBottonElement.type = "button";
  moveDownBottonElement.value = "Down";
  moveDownBottonElement.onclick = function () {
      move(index, + 1);
  }
newTodoTaskElement.appendChild(moveDownBottonElement);
  return newTodoTaskElement;
}


function move(index, newIndex) {
  console.log(todoTaskText[index])
    const item = todoTaskText.splice(index, 1)[0];
    todoTaskText.splice(newIndex, 0, item)
    console.log(todoTaskText[index])
  updateTodoList();
}

function toggleComplete(index) {
  // If the to do is not complete
  if (todoTaskStatus[index] == false) {
    // Set the todo to complete
    todoTaskStatus[index] = true;
  } else {
    // Else the todo is already complete so set it to incomplete
    todoTaskStatus[index] = false;
  }
  updateTodoList();
}

updateTodoList();

