// + Variables
const icono = document.querySelector('#icono')
const botones = document.querySelectorAll('.agregar-carrito');
const alerta = document.querySelector('.alerta');
const borrar = document.querySelector('.borrar-curso')

/**
 * + Evento de cambiar icono
 */

// * agregar evento de click al icono
icono.addEventListener('click', () => {
    // * Si no contiene la clase 'taxt-blue-400' agregarla y poner color y un nuevo icono
    if (!icono.classList.contains('text-blue-400')) {
        icono.classList.add('text-blue-400', 'dark:text-blue-300')
        icono.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-open"><path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z"/><path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z"/><line x1="12" x2="12" y1="22" y2="13"/><path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5"/></svg>
        `
    } else {
        // * si ya la contiene remover clases de color y agregar otro icono
        icono.classList.remove('text-blue-400', 'dark:text-blue-300')
        icono.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>        `
    }

})

/**
 * + Evento de mostrar la alerta 'Agregado al carrito'
 */
botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        e.preventDefault();

        alerta.classList.remove('-bottom-14'); // * Quitar la clase '-bottom-14' para mostrar la alerta
        alerta.classList.add('bottom-14'); // * Agregar la clase 'bottom-14' para mostrar la alerta

        setTimeout(() => {
            alerta.classList.remove('bottom-14'); // * Quitar la clase 'bottom-14' después de 5 segundos para ocultar la alerta
            alerta.classList.add('-bottom-14'); // * Agregar la clase '-bottom-14' después de 5 segundos para ocultar la alerta
        }, 2000);
    });
});

