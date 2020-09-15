let numberLines = 5; // para dar como alternativa editar o numero de linhas nos requisitos bonus
let pixelBoard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k = 0; // pra ir do 0 até o 24
for (let index = 0; index < numberLines; index += 1) {
    linha[index] = document.createElement("div"); // document.createElement("div").className = "linha"
    linha[index].className = "linha"; // ^ forma alternativa
    pixelBoard.appendChild(linha[index]);

    for (let j = 0; j < numberLines; j += 1) {
        //
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        linha[i].appendChild(pixel[k]);
        k = k + 1;
    }
}
console.log(linha);

