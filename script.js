// Função que cria o quadro de pixels
function createPixelsBoard(number) {
  let count = 0;
  let board = document.querySelector("#pixel-board");
  board.className = "pixels-board";
  for (let indexLine = 0; indexLine < number; indexLine += 1) {
    let line = document.createElement("div");
    line.id = `line${indexLine + 1}`;
    line.className = "line-display"
    board.appendChild(line);
    for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
      count += 1;
      let column = document.createElement("div");
      column.id = `pixel${count}`;
      column.className = "pixel column-display";
      line.appendChild(column);
    }
  }
}

// Predefinições ao carregar a página
window.onload = function () {
  createPixelsBoard(5);
}

let color = "black";

// Adiciona a classe selected a cor preta
let black = document.querySelector(".black");
black.addEventListener("click", function () {
  black.classList.add("selected");
  red.classList.remove("selected");
  green.classList.remove("selected");
  blue.classList.remove("selected");
  color = window.getComputedStyle(black).getPropertyValue("background-color");
});

// Adiciona a classe selected a cor vermelha
let red = document.querySelector(".red");
red.addEventListener("click", function () {
  black.classList.remove("selected");
  red.classList.add("selected");
  green.classList.remove("selected");
  blue.classList.remove("selected");
  color = window.getComputedStyle(red).getPropertyValue("background-color");
});

// Adiciona a classe selected a cor verde
let green = document.querySelector(".green");
green.addEventListener("click", function () {
  black.classList.remove("selected");
  red.classList.remove("selected");
  green.classList.add("selected");
  blue.classList.remove("selected");
  color = window.getComputedStyle(green).getPropertyValue("background-color");
});

// Adiciona a classe selected a cor azul
let blue = document.querySelector(".blue");
blue.addEventListener("click", function () {
  black.classList.remove("selected");
  red.classList.remove("selected");
  green.classList.remove("selected");
  blue.classList.add("selected");
  color = window.getComputedStyle(blue).getPropertyValue("background-color");
});