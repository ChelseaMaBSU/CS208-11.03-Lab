// Wait for DOM to load
document.addEventListener('DOMContentLoaded', domLoaded);

function domLoaded() {
    //Register Add button click handler
    const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', addBtnClick);
    
    //Register keyup handler for Enter key
    const taskInput = document.querySelector('#new-task');
    taskInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            addBtnClick();
        }
    });
    
    //Register existing done buttons
    const doneBtns = document.querySelectorAll('.done-btn');
    doneBtns.forEach(btn => {
        btn.addEventListener('click', removeTask);
    });
}

function addBtnClick() {
    const taskInput = document.querySelector('#new-task');
    const taskText = taskInput.value.trim();
    
    // Prevent empty tasks
    if (taskText === '') {
        return;
    }
    
    //Add the new task
    addTask(taskText);
    
    //Clear textbox and refocus
    taskInput.value = '';
    taskInput.focus();
}

function addTask(task) {
    //Create new list item
    const newLi = document.createElement('li');
    newLi.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;
    
    //Append to the ordered list
    const taskList = document.querySelector('#task-list');
    taskList.appendChild(newLi);
    
    //Register click handler for the new done button
    const doneBtns = document.querySelectorAll('.done-btn');
    const lastDoneBtn = doneBtns[doneBtns.length - 1];
    lastDoneBtn.addEventListener('click', removeTask);
}

function removeTask(event) {
    //Remove the task
    const listItem = event.target.parentNode;
    const taskList = listItem.parentNode;
    taskList.removeChild(listItem);
}