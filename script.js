const container = document.querySelector('.container-dos');
const testimonios = document.querySelectorAll('.testimonio');
const tiempoEspera = 3000; 
let posicionActual = 0;

function moverCarrusel() {
    testimonios[posicionActual].style.display = 'none';
    posicionActual = (posicionActual + 1) % testimonios.length;
    testimonios[posicionActual].style.display = 'block';
}

function iniciarCarrusel() {
    testimonios[posicionActual].style.display = 'block';
    setInterval(moverCarrusel, tiempoEspera);
}

iniciarCarrusel();
