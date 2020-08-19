// Variables
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

   // To create a div to hold the task info and add a li
   var taskInfoEl = document.createElement("div");
   // Giving ^ a class name
   taskInfoEl.className = "task-info";
   // To add HTML content within the div
   taskInfoEl.innerHTML = "<h3 class='task-name'>" +taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

   listItemEl.appendChild(taskInfoEl);

   // To add entire li to list
   tasksToDoEl.appendChild(listItemEl);
};

// To allow the event to run function 'createTaskHandler'
formEl.addEventListener("submit", taskFormHandler);