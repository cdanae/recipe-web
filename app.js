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
const grande = document.querySelector(".carousel_container")
const spot = document.querySelectorAll(".spot")

//Cuando CLICK en punto
    //Saber la posición de ese spot
    //Aplicar un transform translateX al carousel_container
    //QUITAR la clase activate de TODOS los spot
    //AÑADIR la clase activate al spot que hemos hecho CLICK

    //RECORRER TODOS los spot
spot.forEach((cadaSpot , i)=> {
   //ASIGNAMOS un CLICK a cada spot
    spot[i].addEventListener("click", () => {

        //GUARDAR la posición de ese spot
        let position = i
        //CALCULANDO el espacio que debe desplazarse el carousel_container
        let operation = position * -20
        //position en 0 el transformX es 0
        //position en 0 el transformX es -20%
        //operation = posicion * -20

        //MOVEMOS el carousel_container
        grande.style.transform = `translateX(${operation}%)`

        //RECORREMOS todos los spot
        spot.forEach( (cadaSpot, i) => {
            //QUITAMOS el class activate a todos los spot
            spot[i].classList.remove("activate")
        })
        //AÑADIR el class activate en el spot que se hace CLICK
        spot[i].classList.add("activate")
    })
});
