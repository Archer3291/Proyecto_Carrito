// + Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
const alerta_eliminar = document.querySelector('.alerta-eliminar')
const alertaAgregar = document.querySelector('.alerta-agregar')

let articulosCarrito = []

cargarEventListener()
function cargarEventListener() {
    // * Cuando agregas un curso precionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso)

    // * Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    // * Vaciar carrito 
    vaciarCarritoBtn.addEventListener('click', (e) => {
        if (articulosCarrito.length === 0) {
            alertaAgregar.classList.remove('-bottom-14'); // * Quitar la clase '-bottom-14' para mostrar la alerta
            alertaAgregar.classList.add('bottom-14'); // * Agregar la clase 'bottom-14' para mostrar la alerta
            setTimeout(() => {
                alertaAgregar.classList.remove('bottom-14'); // * Quitar la clase 'bottom-14' después de 5 segundos para ocultar la alerta
                alertaAgregar.classList.add('-bottom-14'); // * Agregar la clase '-bottom-14' después de 5 segundos para ocultar la alerta
            }, 1000);

        } else {
            articulosCarrito = [] // * Se resetea el carrito
            limpiarHTML() // * Eliminamos todo el HTML

            alerta_eliminar.classList.remove('-bottom-14'); // * Quitar la clase '-bottom-14' para mostrar la alerta
            alerta_eliminar.classList.add('bottom-14'); // * Agregar la clase 'bottom-14' para mostrar la alerta
            setTimeout(() => {
                alerta_eliminar.classList.remove('bottom-14'); // * Quitar la clase 'bottom-14' después de 5 segundos para ocultar la alerta
                alerta_eliminar.classList.add('-bottom-14'); // * Agregar la clase '-bottom-14' después de 5 segundos para ocultar la alerta
            }, 1000);
        }
    })
}

// + Funciones
function agregarCurso(e) {
    e.preventDefault()
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado)
    }
}

// + Elimina un curso del carrito
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id')

        // *Elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)
        carritoHTML()

        alerta_eliminar.classList.remove('-bottom-14'); // * Quitar la clase '-bottom-14' para mostrar la alerta
        alerta_eliminar.classList.add('bottom-14'); // * Agregar la clase 'bottom-14' para mostrar la alerta
        setTimeout(() => {
            alerta_eliminar.classList.remove('bottom-14'); // * Quitar la clase 'bottom-14' después de 5 segundos para ocultar la alerta
            alerta_eliminar.classList.add('-bottom-14'); // * Agregar la clase '-bottom-14' después de 5 segundos para ocultar la alerta
        }, 1000);
    }
}

// + lee el contenido del HTML la que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    // * Crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // * Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    if (existe) {
        // * Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++
                return curso // * Retorna el objeto actualizado 
            } else {
                return curso // * Retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [ ...cursos ]
    } else {
        articulosCarrito = [ ...articulosCarrito, infoCurso ]
    }

    // * Agrega elementos al arreglo de carrito
    carritoHTML()
}

// + Muestra el carrito de compras en el HTML
function carritoHTML() {
    // * Limpiar el HTML
    limpiarHTML()

    // * Recorre el carrito y genera HTML

    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id } = curso
        const row = document.createElement('tr')
        row.innerHTML = `
               <td class="flex justify-center items-center">
                    <img src="${imagen}" width="100px">
               </td>
               <td>
                    ${titulo}
               </td>
               <td>
                    ${precio}
               </td>
               <td>
                    ${cantidad}
               </td>
               <td class="w-10 h-10">
                    <a class="borrar-curso font-semi-bold text-2xl bg-red-600 hover:bg-red-700 rounded-full p-2 cursor-pointer" data-id="${id}"> X </a>
               </td>
               `

        // * Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    })
}

// + Elimina los cursos del tbody
function limpiarHTML() {
    // * Forma lenta
    // * contenedorCarrito.innerHTML = ''

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}