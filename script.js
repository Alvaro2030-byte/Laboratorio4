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