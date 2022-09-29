let menu = document.getElementById("menu")
let nav = document.getElementById("nav")
let close = document.getElementById("close")

menu.addEventListener("click", function (){
    nav.classList.add("menu_activate")
});

close.addEventListener("click", function (){
    nav.classList.remove("menu_activate")
});

