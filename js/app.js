import { consultarAPI } from "./consultaAPI.js"
import { mostrarError } from "./error.js"

export const container = document.querySelector('.container')

const formulario = document.querySelector('#formulario')

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault()
    console.log('Buscando el clima');

    //Validacion 
    const ciudad = document.querySelector('#ciudad').value
    const pais = document.querySelector('#pais').value

    if (ciudad === '' || pais === '') {
        // console.error('No puede pasar datos vacios');
        // Dejar el desafío para que hagan que desaparezca despues de 5 segundos el alerta
        const alerta = container.appendChild(mostrarError('Error al mostrar el clima, verificar campos'))
        setTimeout(() => {
            alerta.remove()
        }, 5000)
    }
    /*     console.log(ciudad);
        console.log(pais); */


    // Consultar API
    consultarAPI(ciudad, pais)


}

