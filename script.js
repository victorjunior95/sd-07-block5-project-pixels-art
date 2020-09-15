let numberLines = 5;
let pixelBoard = document.getElementById("pixel-board");

let linha = [];
let pixel = [];
ind = 0;
for (let i = 0; i < numberLines; i += 1) {
    linha[i] = document.createElement("div");
    linha[i].className = "linha";
    pixelBoard.appendChild(linha[i]);
    for (let j = 0; j < numberLines; j += 1) {
        pixel[ind] = document.createElement("div");
        pixel[ind].className = "pixel";
        linha[i].appendChild(pixel[ind]);
        ind += 1;
    }
}

