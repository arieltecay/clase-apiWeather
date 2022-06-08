export function spinner() {
    const spinner = document.createElement('h2')
    spinner.style = "display:flex; justify-content:center; color:white;flex-direction:column;font-size:22px"
    spinner.textContent = 'Buscando datos...'
    resultado.appendChild(spinner)
}