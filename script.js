//selecciona el menu y el encabezado del html y style.css
const menu = document.querySelector(".menu");
const encabezado = document.querySelector(".encabezado");

//Obten la altura del emcabezado
const altura = encabezado.offsetHeight;

//Función que cambia el color de fondo del menu cuando se desplaza
window.addEventListener("scroll", function () {
    if (window.scrollY > altura) {
        menu.style.backgroundColor = "rgba(179, 239, 247)"; //Color de fondo del menu
    } else {
        menu.style.backgroundColor = "transparent"; //Color de fondo del menu
    }
    
})