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

/*
let black = document.querySelector(".black");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
*/

let color = document.querySelectorAll(".color");
console.log(color);

for (let c = 0; c < color.length; c += 1) {
    color[c].addEventListener("click", function(event) {
        let selected = document.querySelector(".selected");
        selected.classList.remove('selected');
        //color[c].classList.add('selected');
        event.target.className += " selected";
    });
}


