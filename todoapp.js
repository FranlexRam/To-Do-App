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
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        contadorTotal.innerHTML = ul.children.length;
        contIncompleted.innerHTML = ul.children.length;

        const items = document.querySelectorAll('li');

        if (items.length === 0) {
            empty.style.display = 'block';          
        }
    });
    return deleteBtn;
}



function chkBtn() {
    const chkBtn = document.createElement('button');

    chkBtn.textContent = 'O';
    chkBtn.className = 'chkBtn';

    chkBtn.addEventListener('click', (e) => {
        const item = e.target;
        
        

 
    });
    return chkBtn;
}



//Almacenar datos:

(() => {
    //tbody.innerHTML = localStorage.getItem('lista');
    contadorTotal.innerHTML = ul.children.length;
    contIncompleted.innerHTML = ul.children.length;
})()


