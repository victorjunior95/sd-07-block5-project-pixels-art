//criei uma função que seleciona todas as linhas
window.onload = function () {
let baseQuadrado = 5;
let controlPosition = baseQuadrado;
let lines = document.querySelectorAll(".pixel");

fillSquare(lines);

//passa por todas as linhas e preenche o quadrado de pixels
function fillSquare (lines) {
    for (let index = 0; index <= lines.length; index += 1) {
    fillLines(lines[index]);
    controlPosition += 1
    }
}
// é uma função que cria uma div, que criará uma caixa
function createBox (className) {
    let box = document.createElement("div");
    box.className = className
    return box;
}

function fillLines(divline) {
    for (let lineColumn = 1; lineColumn <= baseQuadrado; lineColumn += 1) {
          let box = createBox("box");
          divLine.appendChild(box);
    }
}
}