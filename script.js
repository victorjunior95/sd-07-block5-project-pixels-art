const sizeBoard = document.querySelector('#board-size');
const generatorButton = document.querySelector('#generate-board');
const board = document.querySelector('#pixel-board');
const arrayColorOfPalette = document.querySelectorAll('.color');

const clear = document.querySelector('#clear-board');

let size = null;

let currentColor = 'black';

sizeBoard.addEventListener('keyup', function () {
  size = sizeBoard.value;
  if (size > 50) {
    size = 50;
  }
  if (size < 5) {
    size = 5
  }
  returnOrClick ();
});

function returnOrClick () {
    sizeBoard.addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        createPixels();
      }
    });
    generatorButton.addEventListener('click', createPixels);
}

function createPixels () {
  size = parseInt(size);

  // https://developer.cdn.mozilla.net/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow - potencia;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/repeat - (criando a quantidade suficiente pra preencher o grid) display grid mais no CSS;


  for (let index = 1; index <= Math.pow(size, 2); index += 1) {
    let newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    board.appendChild(newPixel);
  }
  makeBoard ();
}

function makeBoard () {

  // https://developer.mozilla.org/en-US/docs/Web/CSS/repeat - (preenchendo colunas e linhas com os elementos criados no passo acima) display grid mais no CSS;

  board.style.gridTemplateColumns = `repeat(${size}, 40px)`;
  board.style.gridTemplateRows = `repeat(${size}, 40px)`;
  loopForPaint ();
}

function getRandom () {
  return Math.floor(Math.random() * 100);
}

function selectColorsOfPalette () {
  for (let index = 1; index < arrayColorOfPalette.length; index += 1) {
    let randomRGBColor = `rgb(${getRandom ()} , ${getRandom ()} , ${getRandom()})`;
    arrayColorOfPalette[index].style.backgroundColor = randomRGBColor;
    arrayColorOfPalette[index].style.color = randomRGBColor;
  }
  loopForColor ();
}

selectColorsOfPalette ();

window.onload = function() {
  arrayColorOfPalette[0].classList.add('selected');
  arrayColorOfPalette[0].style.backgroundColor = 'black';
  arrayColorOfPalette[0].style.color = 'black';
  currentColor = 'black';
}

function loopForColor () {
  for (let index = 0; index < arrayColorOfPalette.length; index += 1) {
    getTheColor (index);
  }
}

function getTheColor (index) {
  arrayColorOfPalette[index].addEventListener('click', function () {
    currentColor = arrayColorOfPalette[index].style.color;
    changeSelect (index);
  });
}

function changeSelect (position) {
  arrayColorOfPalette[position].classList.add('selected');
  for (let index = 0; index < arrayColorOfPalette.length; index += 1) {
    if (index != position) {
      arrayColorOfPalette[index].classList.remove('selected');
    }
  }
} 

function loopForPaint () {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    paint(pixels, index);
  }
}

function paint (pixels, position) {
  pixels[position].addEventListener('click', function () {
    pixels[position].style.backgroundColor = currentColor;
  });
  clearButton (pixels);
}

function clearButton (pixels) {
  clear.addEventListener('click', function () {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
