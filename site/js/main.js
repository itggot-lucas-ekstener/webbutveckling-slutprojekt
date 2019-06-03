let nav = document.querySelector("nav")
let nav_icon = document.querySelector(".nav_icon")
let nav_icon_alt = document.querySelector('.nav-icon3');
let dark = document.querySelector(".dark")
dark.addEventListener('click', navToggle)
dark.addEventListener('click', iconTransform)
let header = document.querySelector(".header")


function navToggle(event){
    nav.classList.toggle("hidden")
    dark.classList.toggle("hidden_dark")
}

function iconTransform(event){
    nav_icon_alt.classList.toggle('open')
}

var prevScrollpos = window.pageYOffset;
let hideClass = "header_hide"
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (nav.classList.contains('hidden')){
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