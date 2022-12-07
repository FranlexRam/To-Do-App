// Selectores
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');
const contadorTotal = document.getElementById('contTotal');
const contIncompleted = document.getElementById('contIncompleted');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(chkBtn())
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = "";
        empty.style.display = 'none';

        contadorTotal.innerHTML = ul.children.length;
        contIncompleted.innerHTML = ul.children.length;

    }


});

function addDeleteBtn() {

//-------------------------Nuevo implemento comienza aqui---------------------------------------------------
    const trashButton = document.createElement('button');

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Check trash button
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('btn-delete');
    todoDiv.appendChild(trashButton);

    trashButton.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        contadorTotal.innerHTML = ul.children.length;
        contIncompleted.innerHTML = ul.children.length;

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = 'block';
        }
    });
    return trashButton;
//-------------------------Nuevo implemento termina aqui---------------------------------------------------

}

function chkBtn() {


    //-------------------------Nuevo implemento comienza aqui---------------------------------------------------
    const completedButton = document.createElement('button');

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Check trash button
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('chkBtn');
    todoDiv.appendChild(completedButton);

    completedButton.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        
       if (item === 'chkBtn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
       }


        contadorTotal.innerHTML = ul.children.length;
        contIncompleted.innerHTML = ul.children.length;

    
    });
    return completedButton;




//-------------------------Nuevo implemento termina aqui---------------------------------------------------

}



//Almacenar datos:

(() => {
    //tbody.innerHTML = localStorage.getItem('lista');
    contadorTotal.innerHTML = ul.children.length;
    contIncompleted.innerHTML = ul.children.length;
})()


