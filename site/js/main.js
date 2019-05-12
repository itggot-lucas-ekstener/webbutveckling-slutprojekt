let menu = document.querySelector("menu")
let menu_icon = document.querySelector(".menu_icon")
let menu_icon_alt = document.getElementById('nav-icon3');
let dark = document.querySelector(".dark")
dark.addEventListener('click', menuToggle)
let header = document.querySelector(".header")


function menuToggle(event){
    menu.classList.toggle("hidden")
    dark.classList.toggle("hidden_dark")
    header.classList.toggle("header")
}

function iconTransform(event){
    menu_icon_alt.classList.toggle('open')
}

var prevScrollpos = window.pageYOffset;
let hideClass = "header_hide"
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (menu.classList.contains('hidden')){
        if (prevScrollpos > currentScrollPos) {
            if (header.classList.contains(hideClass)){
                    header.classList.remove(hideClass)
            }
        } else {
            if (!header.classList.contains(hideClass)){
                header.classList.add(hideClass)
            }
        }
    } else {}
prevScrollpos = currentScrollPos;
}