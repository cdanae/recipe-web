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


spot.forEach((cadaSpot , i)=> {
    spot[i].addEventListener("click", () => {
        let position = i
        let operation = position * -20
  
        grande.style.transform = `translateX(${operation}%)`

        spot.forEach( (cadaSpot, i) => {
            spot[i].classList.remove("activate")
        })
            
        spot[i].classList.add("activate")
    })
});


        


        


