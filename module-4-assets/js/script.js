var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#task-to-do");

//we have now listed both of the elements in our DOM we are working on: The button and the task cell.

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name ='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //making a conditional statement so no empty cells get inserted
    if (!taskNameInput || !taskTypeInput) {
        alert("you need to fill out the task form!");
        return false;
    }

    formEl.reset();
    
    //reads: if not name OR type then, ALERT + return FALSE


    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
      // send it as an argument to createTaskEl
      createTaskEl(taskDataObj);  
   
}

var createTaskEl = function(taskDataObj){
     //create list item 
     var listItemEl = document.createElement("li");
     listItemEl.className = "task-item";
     
     //create div to hold task info and add to list item
     var taskInfoEl = document.createElement("div");
 
     //give it a class name
     taskInfoEl.className = "task-info";
 
     //add HTML content to div
     taskInfoEl.innerHTML = "<h3 class='task-name'>"+ taskDataObj.name + "</h3><span class='task-type'>"+ taskDataObj.type + "</span>";
     
     listItemEl.appendChild(taskInfoEl);
     
     //add entire list item to list
     taskToDoEl.appendChild(listItemEl);

}
formEl.addEventListener("submit",taskFormHandler)

