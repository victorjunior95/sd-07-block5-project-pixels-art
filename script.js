// let numberLines = 5;
// let pixelBoard = document.getElementById("pixel-board");

// let pixel = [];
// let linha = [];

// let k = 0
// for(let i = 0; i < numberLines;i +=1) {
//     linha[i] = document.createElement("div");
//     linha[i].classname = "linha"
//     pixelBoard.appendChild(linha[i]);

//     for (let j = 0; j < numberLines;j += 1) {
//         pixel[k] = document.createElement("div")
//         pixel[k].classname = "pixel"
//         linha[i].appendChild(pixel[k]);
//         k += 1;
//     }
// }

let color = document.querySelectorAll(".color")

for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener("click", function(event) {
        let selected = document.querySelector(".selected")
        selected.classList.remove("selected")
        event.target.className += " selected"
    })
}

buttonClear = document.getElementById("clear-board")

buttonClear.addEventListener("click", function() {
    clear = document.querySelectorAll(".pixel")
    clear.stye.backgroundColor = 'white'

})