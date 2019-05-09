let menu = document.querySelector("menu")
let menu_icon = document.querySelector(".menu_icon")

function menuToggle(event){
    menu.classList.toggle("hidden")
}
let menu_icon_alt = document.getElementById('nav-icon3');
function iconTransform(event){
    menu_icon_alt.classList.toggle('open')
}


