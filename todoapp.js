/* SELECTORES */
const formulario = document.querySelector("#formulario");
const tareas = document.querySelector("#tareas");
const total = document.querySelector("#total");
const completadas = document.querySelector("#completadas");
const incompletas = document.querySelector("#incompletas");
let task = [];
/* EVENTOS */
(() => {
    formulario.addEventListener('submit', validarFormulario);
    tareas.addEventListener("click", eliminarTarea);
    tareas.addEventListener("click", completarTarea);
    document.addEventListener("DOMContentLoaded", () => {
        let datosLS = JSON.parse(localStorage.getItem("tareas")) || [];
        task = datosLS;
        agregarHTML();
    })
})()

/* FUNCIONES */
function validarFormulario(e) {
    e.preventDefault();
    //validar los campos
    const tarea = document.querySelector("#tarea").value;
    if (tarea.trim().length === 0) {
        console.log('vacio');
        return
    }

    //crear objeto tarea
    const objTarea = { id: Date.now(), tarea: tarea, estado: false };
    //agregar al array
    task = [...task, objTarea];
    formulario.reset();

    //agregar al HTML
    agregarHTML();

}


function agregarHTML() {

    //limpiar el HTML
    while (tareas.firstChild) {
        tareas.removeChild(tareas.firstChild)
    }

    if (task.length > 0) {
        task.forEach(item => {
            const elemento = document.createElement('div');
            elemento.classList.add('item-tarea');
            elemento.innerHTML = `
                <p>${item.estado ? (`<span class='completa'>${item.tarea}</span>`) : (`<span>${item.tarea}</span>`)}</p>
                <div class="botones">
                    <button class="completada" data-id="${item.id}">      ${item.estado ? (`<span class='completa'><i class="fa-sharp fa-solid fa-check-double"></i></span>`) : (`<span><i class="fa-solid fa-check"></i></span>`)}          </button>
                    <button class="eliminar" data-id="${item.id}">        ${item.estado ? (`<span class='completa'><i class="fa-solid fa-trash-can"></i></span>`) : (`<span><i class="fa-solid fa-trash-can"></i></span>`)}          </button>
                </div>
            `

            tareas.appendChild(elemento)
        });

    } else {
        const mensaje = document.createElement("h5");
        mensaje.textContent = "~No tienes tareas pendientes~"
        tareas.appendChild(mensaje)
    }



    //CONTADORES
    let totalTareas = task.length;
    let tareasCompletas = task.filter(item => item.estado === true).length;
    let tareasIncompletas = task.filter(item => item.estado === false).length;

    total.textContent = `Total: ${totalTareas}`;
    completadas.textContent = `Completadas: ${tareasCompletas}`;
    incompletas.textContent = `Incompletas: ${tareasIncompletas}`;

    //Almacenar datos con localStorage
    localStorage.setItem("tareas", JSON.stringify(task))

}

function eliminarTarea(e) {
    if (e.target.classList.contains("eliminar")) {
        const tareaID = Number(e.target.getAttribute("data-id"));
        //eliminar con el array method filter
        const nuevasTareas = task.filter((item) => item.id !== tareaID);
        task = nuevasTareas;
        agregarHTML();
    }
}


//completar tarea
function completarTarea(e) {
    if (e.target.classList.contains("completada")) {
        const tareaID = Number(e.target.getAttribute("data-id"));
        const nuevasTareas = task.map(item => {
            if (item.id === tareaID) {
                item.estado = !item.estado;
                return item;
            } else {
                return item
            }
        })

        //Editar el arreglo
        task = nuevasTareas;
        agregarHTML();
    }
}