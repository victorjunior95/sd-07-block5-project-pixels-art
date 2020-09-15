var black = document.querySelector(".black");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
var yellow = document.querySelector(".yellow");
var colors = document.getElementsByClassName("color");

function selectorB () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === black){
            colors[i].classList.add("selected");
        }
    }
}

function selectorG () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === green){
            colors[i].classList.add("selected");
        }
    }
}

function selectorR () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === red){
            colors[i].classList.add("selected");
        }
    }
}

function selectorY () {
    for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove("selected");
        console.log(colors[i])

        if(colors[i] === yellow){
            colors[i].classList.add("selected");
        }
    }
}

black.addEventListener('click', selectorB);
green.addEventListener('click', selectorG);
red.addEventListener('click', selectorR);
yellow.addEventListener('click', selectorY);

window.onload = selectorB;