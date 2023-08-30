"use strict";

let button_top = document.querySelector(".scroll-top");

button_top.addEventListener("click", e => {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", e => {
    if (window.scrollY > 500) {
        button_top.style.opacity = "1";
    }
    else {
        button_top.style.opacity = "0";
    }
})