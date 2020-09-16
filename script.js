// Coloca primeira cor (preta) como selecionada ao carregar a página
window.onload = function () {
    populateBoard(5);
    selectFirstColor ();
    clickablePixel();
}

function selectFirstColor () {
    let firstColor = document.getElementsByClassName("first-color")[0];
    firstColor.classList.add("selected");
}

// Looping para adicionar Event Listener em todos os pixels para pintar quando clicar
function clickablePixel () {
    let pixels = document.getElementsByClassName("pixel");
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].addEventListener("click", paintPixel);
    }
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
    selectedColor.classList.remove("selected");
    this.classList.add("selected");
    console.log(this.classList);
}

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", clearColors);

// Função para limpar as cores
function clearColors () {
    let pixels = document.getElementsByClassName("pixel");
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = "";
    }
}

let defineGenerateBoardButton = document.getElementById("generate-board");
defineGenerateBoardButton.addEventListener("click", generateBoard);

// Função para definir número de pixels
function generateBoard () {
    let numeroDePixels = parseInt(document.getElementById("board-size").value);
    if (document.getElementById("board-size").value == "") {
        alert("Board inválido!")
    }
    else if (numeroDePixels > 50) {
        deleteBoard();
        populateBoard(50);
    }
    else if (numeroDePixels > 4 && numeroDePixels < 51) {
        deleteBoard();
        populateBoard(numeroDePixels);
    }
}

// Função que apaga o board
function deleteBoard () {
    let pixelBoard = document.getElementById("pixel-board");
        while (pixelBoard.childElementCount > 0) {
            pixelBoard.removeChild(pixelBoard.lastChild);
        }
}

// Função que reconstrói o board
function populateBoard (numeroDePixels) {
    let pixelBoard = document.getElementById("pixel-board");
    //let numeroDePixels = parseInt(document.getElementById("board-size").value);
    for (numeroDeLinhas = 0; numeroDeLinhas < numeroDePixels; numeroDeLinhas += 1) {
        // criar linha
        let novaLinha = document.createElement("div");
        pixelBoard.appendChild(novaLinha);
        for (numeroDeColunas = 0; numeroDeColunas < numeroDePixels; numeroDeColunas += 1) {
            let novoPixel = document.createElement("div");
            novoPixel.className = "pixel";
            novaLinha.appendChild(novoPixel);
        }
    clickablePixel();
    }
}