var pageContentEl = document.querySelector("#page-content");
var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#task-to-do");
var deleteTask = function(taskId) {
    console.log(taskId);
};

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
     
    // add task id as a custom atribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

     //create div to hold task info and add to list item
     var taskInfoEl = document.createElement("div");
 
     //give it a class name
     taskInfoEl.className = "task-info";
 
     //add HTML content to div
     taskInfoEl.innerHTML = "<h3 class='task-name'>"+ taskDataObj.name + "</h3><span class='task-type'>"+ taskDataObj.type + "</span>";
     listItemEl.appendChild(taskInfoEl);
     var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);
    
     //add entire list item to list
     taskToDoEl.appendChild(listItemEl);

     //increase task counter for next unique id+1
     taskIdCounter++;
};

var createTaskActions = function(taskId){
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    
    //create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);


    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];

    for (var i=0; i < statusChoices.length; i++){
        //create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        //append to select
        statusSelectEl.appendChild(statusOptionEl);




    };


    return actionContainerEl;
};
formEl.addEventListener("submit",taskFormHandler)

var taskButtonHandler = function(event) {
    console.log(event.target);

    if (event.target.matches(".delete-btn")){
        //get the element's task id
        var taskId = event.target.getAttribute("data-task-id");
        console.log(taskId);
    }

    if(event.target.matches(".delete-btn")){
        var taskId = event.target.getAttribute("data-task-id");
        deleteTask(taskId);
    }
};

var deleteTask = function(taskId) {
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
};
pageContentEl.addEventListener("click", taskButtonHandler);