export function mostrarError(message) {
    // console.log(message);
    const alerta = document.createElement('p')
    alerta.style = 'background:red;color:white'
    alerta.innerText = message
    // container.appendChild(alerta)
    return alerta
}