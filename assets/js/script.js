// Variables
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// To allow an event on click and add to HTML 'MAIN, UL, LI'
var createTaskHandler = function() {
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// To allow the event to run function 'createTaskHandler'
formEl.addEventListener("submit", createTaskHandler);