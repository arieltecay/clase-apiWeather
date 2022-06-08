export function mostrarError(mensaje) {
    // console.error('No se pueden quedar los campos vacíos');  
    const alerta = document.createElement('p')
    alerta.style = 'background:red; color:white; display:flex; justify-content:center'
    alerta.innerText = mensaje
    return alerta
}