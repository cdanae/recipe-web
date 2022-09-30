/* MENÚ DESPLEGABLE VERSIÓN MOBILE */
let menu = document.getElementById("menu")
let nav = document.getElementById("nav")
let close = document.getElementById("close")

menu.addEventListener("click", function (){
    nav.classList.add("menu_activate")
});

close.addEventListener("click", function (){
    nav.classList.remove("menu_activate")
});

/* CARRUSEL VERSIÓN MOBILE */
const grande = document.querySelector(".grande")
const spot = document.querySelectorAll(".spot")

//Cuando CLICK en punto
    //Saber la posición de ese spot
    //Aplicar un transform translateX al grande
    //QUITAR la clase activate de TODOS los spot
    //AÑADIR la clase activate al spot que hemos hecho CLICK

spot.forEach((cadaSpot , i)=> {
    spot[i].addEventListener("click", () => {

        let posicion = i
        let operacion = posicion * -20
        //posicion en 0 el transformX es 0
        //posicion en 0 el transformX es -20%
        //operacion = posicion * -20

        grande.style.transform = `translateX(${operacion}%)`
    })
});
