
let cores = document.querySelectorAll(".color");
let selectedColor = document.querySelector(".selected");
let background = getComputedStyle(selectedColor).backgroundColor;// porque tem que separar em dois?
for (let i=0; i<cores.length; i+= 1) {
    cores[i].addEventListener("click",pegaCor);
    function pegaCor() {
        let selectedColor = document.querySelector(".selected");
        selectedColor.classList.remove("selected");
        cores[i].classList.add("selected");
        selectedColor = document.querySelector(".selected");
        background = getComputedStyle(selectedColor).backgroundColor;
    }
}

let caixas = document.querySelectorAll(".pixel");

for (let i=0; i<caixas.length; i+= 1) {
    caixas[i].addEventListener("click",trocaCor);
    function trocaCor() {
        caixas[i].style.backgroundColor = background;
    }
}

function cleanBoard() {
    for (let i=0; i<caixas.length; i+= 1) {
        caixas[i].style.backgroundColor = document.querySelector("#pixel-board").style.backgroundColor;
        //porque aqui não teve que separar?
        // porque ele não aceita: caixas[i].style.backgroundColor = white;?
    }
}