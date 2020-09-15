// Looping para adicionar Event Listener em todos os pixels para pintar quando clicar
let pixels = document.getElementsByClassName("pixel");
for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener("click", paintPixel);
}

// Função para pintar o pixel
function paintPixel() {
    let selectedColor = document.getElementsByClassName("selected")[0];
    this.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
}

// Trocar de cor
let seletorDeCores = document.getElementsByClassName("color");
for (let index = 0; index < seletorDeCores.length; index += 1) {
    seletorDeCores[index].addEventListener("click", changeColor);
}

// Função para trocar de cor
function changeColor () {
    let selectedColor = document.getElementsByClassName("selected")[0];
    selectedColor.style.backgroundColor = getComputedStyle(this).backgroundColor;
}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", clearColors);

// Função para limpar as cores
function clearColors () {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = "";
    }
}