const backToTop = document.querySelector('.back-to-top');

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const formulario = document.getElementById('contactoForm');
const tablaResumen = document.querySelector('table');

formulario.addEventListener('change', (event) => {
const elemento = event.target;
const nombreCampo = elemento.name;
const valorCampo = elemento.value;

const fila = tablaResumen.querySelector(`th:contains('${nombreCampo}')`);
const celdaValor = fila.nextElementSibling;
celdaValor.textContent = valorCampo;
});

const botonJuego = document.getElementById('jugar-piedra-papel-tijera');
const seccionJuego = document.getElementById('piedra-papel-tijera');
const piedraBtn = document.getElementById('piedra');
const papelBtn = document.getElementById('papel');
const tijeraBtn = document.getElementById('tijera');
const resultadoDiv = document.getElementById('resultado');

botonJuego.addEventListener('click', () => {
    console.log('Se hizo clic en el botón'); 
    seccionJuego.style.display = 'block';
});
piedraBtn.addEventListener('click', () => jugar('piedra'));
papelBtn.addEventListener('click', () => jugar('papel'));
tijeraBtn.addEventListener('click', () => jugar('tijera'));

function jugar(eleccionJugador) {
    const eleccionComputadora = obtenerEleccionComputadora();

function obtenerEleccionComputadora() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}
    if (eleccionJugador === eleccionComputadora) {
        resultadoDiv.textContent = "¡Empate!";
    } else if (
        (eleccionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionComputadora === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionComputadora === 'papel')
    ) {
        resultadoDiv.textContent = "¡Ganaste!";
    } else {
        resultadoDiv.textContent = "¡Perdiste!";
    }
}
