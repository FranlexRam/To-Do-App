// Selectores
const input = document.querySelector('input');//todoInput
const addBtn = document.querySelector('.btn-add');//todoButton
const ul = document.querySelector('ul');//todoList


//event listners
addBtn.addEventListener('click', addTodo);
ul.addEventListener('click', deleteCheck);

//functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;//valores que se ingresan en el input
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    ul.appendChild(todoDiv);

    //Clear to do input value
    input.value='';    
}

function deleteCheck (e) {
    const item = e.target;

    //Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();    
    } 
    
    //Check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');      
    }
}

