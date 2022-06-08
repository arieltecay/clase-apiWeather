import { mostrarError } from "./error.js";
import { kelvinACentigrados } from "./kelACen.js";
import { limpiarHTML } from "./limpiarHtml.js";
import { spinner } from "./spinner.js";
const container = document.querySelector('.container')
const resultado = document.querySelector('#resultado')


export function consultarAPI(ciudad, pais) {
    const appID = 'b463dc96882da7c4efdc8dc95527b092'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`
    // console.log(url);
    limpiarHTML()
    spinner()
    fetch(url)
        .then(res => res.json())
        .then(data => {
            limpiarHTML()
            if (data.cod === '404') {
                container.appendChild(mostrarError('No existe la ciudad'))
                // alert('No existe ciudad')
                return
            }
            mostrarClima(data)
        })
    /* Para mostrar la termperatura en grados celcius hay que hacer que el valor que me trae restarle 273.15 */

}


function mostrarClima(data) {
    const { main: { temp, temp_min, temp_max }, weather, name } = data
    console.log(data);
    const tempA = kelvinACentigrados(temp)
    const temp_minA = kelvinACentigrados(temp_min)
    const temp_maxA = kelvinACentigrados(temp_max)
    const climaImg = weather[0].icon

    const mostrarTemperatura = document.createElement('div')
    mostrarTemperatura.style = "display:flex; justify-content:center; color:white;flex-direction:column;"
    mostrarTemperatura.innerHTML =

        "<h3>Nombre de la ciudad: " + name + "</h3>" +
        "<img width='75' height='75' src='http://openweathermap.org/img/wn/" + climaImg + "@2x.png'/>" +
        "<div>Temperatura: " + (tempA) + "&#8451</div>" +
        "<div>Temperatura Mínima: " + (temp_minA) + "&#8451</div>" +
        "<div>Temperatura Máxima: " + (temp_maxA) + "&#8451</div>" +
        "<div>Clima: " + weather[0].description + "</div>"
    resultado.appendChild(mostrarTemperatura)
}


