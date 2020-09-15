/*let initialColor = document.querySelector("#blackColor");
let red = document.getElementById("redColor");
let blue = document.getElementById("blueColor");
let green = document.getElementById("greenColor");
let clear = document.getElementById("clear-board");
let board = [];

window.onload = inicio;

function inicio() {
  for (let i = 1; i <= 25; i += 1) {
    board[i] = document.querySelector("#px" + [i]);
    board[i].addEventListener("click", function () {
      board[i].style.backgroundColor = "black";
    });
  }
}
*/
let numLinhas = 5;
let pixelBoard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k = 0;
for (let i = 0; i < numLinhas; i += 1) {
  linha[i] = document.createElement("div");
  linha[i].className = "linha";
  pixelBoard.appendChild(linha[i]);

  for (let j = 0; j < numLinhas; j += 1) {
    pixel[k] = document.createElement("div");
    pixel[k].className = "pixel";
    linha[i].appendChild(pixel[k]);
    k = k + 1;
  }
}

let selectedColor = document.querySelectorAll(".color");

for (let i = 0; i < selectedColor.length; i += 1) {
  selectedColor[i].addEventListener("click", function () {
    let selected = document.querySelector(".selected");
    console.log(selected);
    selected.classList.remove("selected");

    selectedColor[i].classList.add("selected");
  });
}
