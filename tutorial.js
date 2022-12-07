// Selectores
const input = document.querySelector('input');//todoInput
const addBtn = document.querySelector('.btn-add');//todoButton
const ul = document.querySelector('ul');//todoList
const empty = document.querySelector('.empty');
const contadorTotal = document.getElementById('contTotal');
const contIncompleted = document.getElementById('contIncompleted');
const completed = document.getElementById('contCompleted');

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
    if (input.value !== '') {

        const newTodo = document.createElement('li');
        newTodo.innerText = input.value;//valores que se ingresan en el input
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);


        //Check mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('chkBtn');
        todoDiv.appendChild(completedButton);


        //Check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('btn-delete');
        todoDiv.appendChild(trashButton);


        //Append to list
        ul.appendChild(todoDiv);
        contadorTotal.innerHTML = ul.children.length;
        contIncompleted.innerHTML = ul.children.length;


        //Clear to do input value
        input.value = '';
        empty.style.display = 'none';
    }
}


function deleteCheck(e) {
    const item = e.target;

    //Delete todo
    if (item.classList[0] === 'btn-delete') {
        const todo = item.parentElement;
        todo.remove();
        contadorTotal.innerHTML = ul.children.length;
        contIncompleted.innerHTML = ul.children.length;
        completed.innerHTML = ul.children.length;
    }

    const items = document.querySelectorAll('li');
    if (items.length === 0) {
        empty.style.display = 'block';
    }

    //Check mark
    if (item.classList[0] === 'chkBtn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        
        completed.innerHTML = ul.children.length
        console.log('completed task');
        contIncompleted.innerHTML = ul.children
        console.log('eliminar Uncompleted');
       
    }

    if (item.classList[0] === 'chkBtn') {
        //aqui codigo contador de tarea completada.
    }
}


(() => {
    //tbody.innerHTML = localStorage.getItem('lista');
    contadorTotal.innerHTML = ul.children.length;
    contIncompleted.innerHTML = ul.children.length;
    completed.innerHTML = ul.children.length;
})()
