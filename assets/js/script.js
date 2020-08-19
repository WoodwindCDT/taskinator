// Variables
var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// To allow an event on click and add to HTML 'MAIN, UL, LI'
var taskFormHandler  = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // To check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("Please populate the given entries to create a task!")
        return false;
    }
    
    formEl.reset();

    // To compile data into an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    // To attach it and send to createTaskEl (argument)
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
   // To create a list item
   var listItemEl = document.createElement("li");
   listItemEl.className = "task-item";

    // To add a task ID as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

   // To create a div to hold the task info and add a li
   var taskInfoEl = document.createElement("div");
   // Giving ^ a class name
   taskInfoEl.className = "task-info";
   // To add HTML content within the div
   taskInfoEl.innerHTML = "<h3 class='task-name'>" +taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

   listItemEl.appendChild(taskInfoEl);

   var taskActionsEl = createTaskActions(taskIdCounter);
   listItemEl.append(taskActionsEl);

   // To add entire li to list
   tasksToDoEl.appendChild(listItemEl);

   // To increase task counter for each unique ID
   taskIdCounter++;
};

var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // To create an Edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // To create a Delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // To create a Dropdown menu
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
        // To create an option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        statusSelectEl.appendChild(statusOptionEl);
    };

    return actionContainerEl;
};


// To allow the event to run function 'createTaskHandler'
formEl.addEventListener("submit", taskFormHandler);