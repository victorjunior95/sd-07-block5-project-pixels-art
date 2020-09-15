const sizeBoard = document.querySelector('#board-size');
const generatorButton = document.querySelector('#generate-board');
const board = document.querySelector('#pixel-board');
const arrayColorOfPalette = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
const clear = document.querySelector('#clear-board');

let size = '';
let currentColor = 'black';

function getRandom() {
  return Math.floor(Math.random() * 100);
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].style.backgroundColor = 'white';
}

for (let index = 1; index < arrayColorOfPalette.length; index += 1) {
  const randomRGBColor = `rgb(${index} , ${getRandom()} , ${getRandom()})`;

  arrayColorOfPalette[index].style.backgroundColor = randomRGBColor;
  arrayColorOfPalette[index].style.color = randomRGBColor;
}

arrayColorOfPalette[0].classList.add('selected');
arrayColorOfPalette[0].style.backgroundColor = 'black';
arrayColorOfPalette[0].style.color = 'black';
currentColor = 'black';
loopForColor();
loopForPaint();

// window.onload = function () {
//   pixels = document.querySelectorAll('.pixel')

  

//   loopForColor();
//   loopForPaint();
// };

generatorButton.addEventListener('click', function () {
  if (size === '') {
    alert('Board inválido!');
  }
});

sizeBoard.addEventListener('keyup', function () {
  size = sizeBoard.value;  
});

sizeBoard.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {

    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault - preventDefault() previne o evento padrão que no caso do input number ao apertar a tecla enter de valor (13) seria dar submit;

    event.preventDefault();
    createPixels();
  }
});
  
generatorButton.addEventListener('click', createPixels);

function removeOldPixels() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function createPixels() {
  if (size > 50) {
    size = 50;
  }
  if (size < 5) {
    size = 5;
  }

  removeOldPixels();

  // https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow - potencia;
  // https://developer.mozilla.org/en-US/docs/Web/CSS/repeat - (criando a quantidade suficiente pra preencher o grid) display grid mais no CSS;

  for (let index = 1; index <= Math.pow(size, 2); index += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    board.appendChild(newPixel);
  }
  makeBoard();
}

function makeBoard() {

  // https://developer.mozilla.org/en-US/docs/Web/CSS/repeat - (preenchendo colunas e linhas com os elementos criados no passo acima) display grid mais no CSS;

  board.style.gridTemplateColumns = `repeat(${size}, 40px)`;
  board.style.gridTemplateRows = `repeat(${size}, 40px)`;
  board.style.justifyContent = 'center';
  pixels = document.querySelectorAll('.pixel');
  loopForPaint();
}

function loopForColor() {
  for (let index = 0; index < arrayColorOfPalette.length; index += 1) {
    getTheColor(index);
  }
}

function getTheColor(index) {
  arrayColorOfPalette[index].addEventListener('click', function () {
    currentColor = arrayColorOfPalette[index].style.backgroundColor;
    changeSelect(index);
  });
}

function changeSelect(position) {
  arrayColorOfPalette[position].classList.add('selected');
  for (let index = 0; index < arrayColorOfPalette.length; index += 1) {
    if (index !== position) {
      arrayColorOfPalette[index].classList.remove('selected');
    }
  }
}

function loopForPaint() {
  for (let index = 0; index < pixels.length; index += 1) {
    paint(index);
  }
}

function paint(position) {
  pixels[position].addEventListener('click', function () {
    pixels[position].style.backgroundColor = currentColor;
  });
}

clear.addEventListener('click', function () {
  board.style.backgroundColor = 'white';
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

