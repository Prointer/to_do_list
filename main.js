function getButton(text, className){
    let button = document.createElement('button')
    button.textContent = text
    button.classList.add(className)
    return button
}

function getInput(placeholder, type, className){
    let input = document.createElement('input')
    input.placeholder = placeholder
    input.type = type
    input.classList.add(className)
    return input
}

function getTaskItem(textContent){
let newTaskItem = document.createElement('li')
newTaskItem.classList.add('task-item')

let taskContent = document.createElement('p')
taskContent.textContent = textContent;
taskContent.classList.add = ('task-item__text')

let statusBtn = getButton("Выполняется", 'task-item__status');
statusBtn.onclick = function(){
    
}

let editBtn = getButton("Изменить", 'task-item__button')
    editBtn.onclick = function(){
        let newText = prompt("Редактировать задачу: ", taskContent.textContent)
        taskContent.textContent = newText;
    }
let removeBtn = getButton("Удалить", 'task-item__button')
removeBtn.onclick = function(){
    newTaskItem.remove();
}
newTaskItem.append(taskContent, statusBtn, editBtn, removeBtn)

return newTaskItem;
}

// Блок для добавления новой задачи
let addTask = document.createElement('div')
addTask.classList.add('input-box')

// Текстовое поле ввода задачи
let newTaskInput = getInput("Введите задачу", 'text', 'input-box__input')
// Клавиши добавления задачи в зависимость от времени
let todayBtn = getButton("Сегодня", 'input-box__btn_today')
let tommorowBtn = getButton("Завтра", 'input-box__btn_tommorow')
let weekBtn = getButton("На этой неделе", 'input-box__btn_week')
let monthBtn = getButton("В этом месяце", 'input-box__btn_month')

addTask.append(newTaskInput, todayBtn, tommorowBtn, weekBtn, monthBtn);

// ----------------
// Блок с задачами
let taskBox = document.createElement('div')
taskBox.classList.add('task-box')
// Задачи на сегодня
let todayList = document.createElement('ul')
todayList.classList.add('list', 'list_today')
// Задачи на завтра
let tommorowList = document.createElement('ul')
tommorowList.classList.add('list', 'list_tommorow')
// Задачи на неделю
let weekList = document.createElement('ul')
weekList.classList.add('list', 'week_today')
// Задачи на месяц
let monthList = document.createElement('ul')
monthList.classList.add('list', 'list_month')

taskBox.append(todayList, tommorowList, weekList, monthList)

todayBtn.onclick = function(){
    let task = newTaskInput.value;
    let newTask  = getTaskItem(task)
    todayList.append(newTask)
    
    newTaskInput.value = "";
}
tommorowBtn.onclick = function(){
    let task = newTaskInput.value;
    let newTask  = getTaskItem(task)
    tommorowList.append(newTask)
    
    newTaskInput.value = "";
}
weekBtn.onclick = function(){
    let task = newTaskInput.value;
    let newTask  = getTaskItem(task)
    weekList.append(newTask)
    
    newTaskInput.value = "";
}
monthBtn.onclick = function(){
    let task = newTaskInput.value;
    let newTask  = getTaskItem(task)
    monthList.append(newTask)
    
    newTaskInput.value = "";
}

document.body.append(addTask, taskBox)