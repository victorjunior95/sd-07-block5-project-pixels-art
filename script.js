const numberLines = 5;
const pixelBoard = document.getElementById("pixel-board");
const color = document.querySelectorAll(".color");

const pixel = []; 
const linha = [];

let k = 0;
for (let i = 0; i < numberLines; i += 1) {
    linha[i] = document.createElement("div");
    linha[i].className = "linha";
    pixelBoard.appendChild(linha[i]);


    for(let j = 0; j < numberLines; j += 1) {
    pixel[k] = document.createElement("div");
    pixel[k].className = "pixel";
    linha[i].appendChild(pixel[k]);
    k = k + 1;
    }
 
}




for (let i = 0; i < color.length; i += 1) {
color[i].addEventListener("click", function() {
    

    let selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    color[i].classList.add('selected');
    // event.target.className += " selected"
   
    
    })
}