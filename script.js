let pixelBoard = document.getElementbyId("pixel-board");
let numberLines = 5;
let pixel = [];
let linha = [];



for (let i = 0; i < numberLines; i++) {
    linha[i] = document.createElement("div");
    linha[i].className = "linha";
    pixelBoard.appendChild(linha[i]);

    for (let j = 0; j < numberLines; j += 1) {

    }
};