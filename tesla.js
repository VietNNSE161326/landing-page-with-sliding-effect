let menu = document.querySelector(".menu");
let container = document.querySelector(".container");
let dots = document.querySelectorAll(".dots span");
let images = ['1__FitMaxWzEyODAsMTAyNF0.jpg', '2019.jpg', 'model-3-main-hero-a-desktop.jfif', 'blueblue.jpg']

function openmenu() {
    menu.style.right = "0";
}

function closemenu() {
    menu.style.right = "-500px";
}

dots.forEach(function (e) {
    e.onclick = function () {
        dots.forEach((e) => e.classList.remove("circle"));
        e.classList.add("circle");
        container.style.backgroundImage = "url(./assets/" + images[[...dots].indexOf(e)] + ")"
        if ([...dots].indexOf(e) == 0) {
            document.querySelector(".right-side p").style.background = "white";
            document.querySelector(".right-side p").style.color = "black";
            document.querySelector("nav img").src = "./assets/442-4425042_tesla-motors-logo-png.png";
        } else if ([...dots].indexOf(e) == 2) {
            document.querySelector(".right-side p").style.background = "#e91b22";
            document.querySelector(".right-side p").style.border = "2px solid white";
            document.querySelector("nav img").src = "./assets/logo.jpg";
            document.querySelector(".right-side p").style.color = "white";
        } else if ([...dots].indexOf(e) == 3) {
            document.querySelector(".right-side p").style.background = "#151c4a";
            document.querySelector("nav img").src = "./assets/bluelogojpg.jpg";
            document.querySelector(".right-side p").style.color = "white";
        } else {
            document.querySelector(".right-side p").style.background = "linear-gradient(to right, #6a6d73, #bfbfbf";
            document.querySelector("nav img").src = "./assets/TESLA T.png";
            document.querySelector(".right-side p").style.color = "white";
        }
    }
})