// Variables
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// To allow an event on click and add to HTML 'MAIN, UL, LI'
var createTaskHandler = function() {
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    event.preventDefault();

    // To create a list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // To create a div to hold the task info and add a li
    var taskInfoEl = document.createElement("div");
    // Giving ^ a class name
    taskInfoEl.className = "task-info";
    // To add HTML content within the div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    // To add entire li to list
    tasksToDoEl.appendChild(listItemEl);
};

// To allow the event to run function 'createTaskHandler'
formEl.addEventListener("submit", createTaskHandler);