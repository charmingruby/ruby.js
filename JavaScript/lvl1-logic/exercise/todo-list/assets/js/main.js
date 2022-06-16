const inputTask = document.querySelector('#input-new-task');
const taskButton = document.querySelector('.btn-new-task');
const tasks = document.querySelector('.tasks');

taskButton.addEventListener('click', (e) => {
    if (!inputTask.value) return;
    createTask(inputTask.value);
    clearInput();  
});

inputTask.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);   
        clearInput();  
    }
});

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('btn-remove')){
        el.parentElement.remove();
        saveTasks();
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createRemoveButton(item) {
    item.innerHTML += ' ';
    const remove = document.createElement('button');
    remove.innerHTML = '-';
    remove.setAttribute('class', 'btn-remove');
    item.appendChild(remove);
}

function createTask(text) {
    const item = document.createElement('li');
    const task = document.createElement('p');
    task.classList.add('task-item');
    item.classList.add('task-content'); 
    task.innerHTML = text;
    item.appendChild(task);
    tasks.appendChild(item);
    createRemoveButton(item);
    saveTasks();
}

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];

    for(let task of liTasks){
        let taskText = task.innerText;
        taskText = taskText.replace('-', '').trim();
        taskList.push(taskText);
    }
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const tasksToLoad = JSON.parse(tasks);

    for(let task of tasksToLoad) {
        createTask(task);
    }
}

addSavedTasks();