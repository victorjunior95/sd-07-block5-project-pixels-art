let numberLines = 5;
let pixelBoard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k = 0;
for (let i = 0; i < numberLines; i += 1) {
	linha[i] = document.createElement("div");
	linha[i].className = "linha";
	pixelBoard.appendChild(linha[i]);

	for (let j = 0; j < numberLines; j += 1) {
		pixel[k] = document.createElement("div");
		pixel[k].className = "pixel";
		linha[i].appendChild(pixel[k]);
		k += 1;
	}
}

console.log(pixel);
