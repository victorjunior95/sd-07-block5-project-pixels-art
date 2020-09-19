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

const black = document.querySelector(".black");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
let selected = document.querySelector(".selected");

// Preto
function blackSelect() {
  black.classList.add("selected");
  red.classList.remove("selected");
  green.classList.remove("selected");
  blue.classList.remove("selected");
  selected = black;
  const colorBlack = window.getComputedStyle(black).getPropertyValue("background-color");
  return colorBlack;
}

// Vermelho
function redSelect() {
  black.classList.remove("selected");
  red.classList.add("selected");
  green.classList.remove("selected");
  blue.classList.remove("selected");
  selected = red;
  const colorRed = window.getComputedStyle(red).getPropertyValue("background-color");
  return colorRed;
}

// Verde
function greenSelect() {
  black.classList.remove("selected");
  red.classList.remove("selected");
  green.classList.add("selected");
  blue.classList.remove("selected");
  selected = green;
  const colorGreen = window.getComputedStyle(green).getPropertyValue("background-color");
  return colorGreen;
}

// Azul
function blueSelect() {
  black.classList.remove("selected");
  red.classList.remove("selected");
  green.classList.remove("selected");
  blue.classList.add("selected");
  selected = blue;
  const colorBlue = window.getComputedStyle(blue).getPropertyValue("background-color");
  return colorBlue;
}

// Evento de click das cores selecionadas
black.addEventListener("click", blackSelect);
red.addEventListener("click", redSelect);
green.addEventListener("click", greenSelect);
blue.addEventListener("click", blueSelect);

// Função pintar os píxels
function paintBoard() {
  let pixelBoard = document.querySelectorAll(".pixel");
  for (let indexPixel = 0; indexPixel < pixelBoard.length; indexPixel += 1) {
    pixelBoard[indexPixel].addEventListener("click", function () {
      pixelBoard[indexPixel].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
    });
  }
}

// Botão para limpar o quadro
let btnErase = document.querySelector("#clear-board");
btnErase.addEventListener("click", function () {
  let numberPixels = document.querySelectorAll(".pixel");
  for (let indexBoard = 0; indexBoard < numberPixels.length; indexBoard += 1) {
    numberPixels[indexBoard].style.backgroundColor = "white";
  };
});

// Botão para gerar o quadro com o tamanho definido pelo usuário
let buttonGenerate = document.querySelector("#generate-board");
buttonGenerate.addEventListener("click", function () {
  let size = document.querySelector("#board-size");
  let erase = document.querySelector("#pixel-board");
  erase.innerHTML = "";
  if (size.value == "") {
    alert("Board inválido!");
  }
  if (size.value < 5) {
    size.value = 5;
    createPixelsBoard(size.value);
  } else if (size.value > 50) {
    size.value = 50;
    createPixelsBoard(size.value)
  } else {
    createPixelsBoard(size.value);
  };
  paintBoard();
});

// Predefinições ao carregar a página
window.onload = function () {
  createPixelsBoard(5);
  paintBoard();
}
