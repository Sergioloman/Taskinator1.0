var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");

//we have now listed both of the elements in our DOM we are working on: The button and the task cell.

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent= "This is a new task";
    taskToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click",createTaskHandler)

