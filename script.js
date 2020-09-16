const boardSize = document.querySelector('#board-size');
const generateBoard = document.querySelector('#generate-board');
const newDocument = document.querySelector('#new-document');
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const windowView = document.querySelector('.window-view');

const firstColor = document.querySelector('.color0');
const secondColor = document.querySelector('.color1');
const thirdColor = document.querySelector('.color2');
const forthColor = document.querySelector('.color3');

let allPixels = document.querySelectorAll('.pixel');
generateBoard.addEventListener('click', function() {
  if (boardSize.value >= 5 && boardSize.value <= 50 && boardSize.value !== undefined) {
    pixelBoard.innerHTML = '';
    newDocument.className = 'new-document-top';
    colorPalette.style.display = 'block';
    generatePixels(boardSize.value);
    boardSize.value = '';
    pixelBoard.style.display = 'inline-block';
    windowView.style.display = 'block';

    firstColor.addEventListener('click', setColorPalette);
    secondColor.addEventListener('click', setColorPalette);
    thirdColor.addEventListener('click', setColorPalette);
    forthColor.addEventListener('click', setColorPalette);
  } else {
    alert("Insira um valor entre 5 e 50");
  }
})
function setColorPalette() {
  let listOfColors = document.querySelectorAll('.color');

  for (index = 0; index < listOfColors.length; index += 1) {
    if (listOfColors[index] === this) {
      listOfColors[index].className = 'color color' + index.toString() + ' selected';

    } else {
      listOfColors[index].className = 'color color' + index.toString();
    }
  }
}

function generatePixels(size) {
  pixelBoard.style.heigth = (size * 42) + 'px';
  pixelBoard.style.width = (size * 42) + 'px';
  
  for (let yIndex = 0; yIndex < size; yIndex += 1) {
    for (let xIndex = 0; xIndex < size; xIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBoard.appendChild(pixel);
      const pixelsStyle = document.createElement('style');
      const setClass = 'px-' + (yIndex + 1).toString() + '-' + (xIndex + 1).toString();
      pixel.setAttribute('onclick', 'paintPixel(this.className)');
      pixel.className = 'pixel';
      pixel.className += ' ' + setClass;
      pixelBoard.appendChild(pixel);
      pixel.appendChild(pixelsStyle);
    }
  }
}

function paintPixel (readClass) {
  let arrayOfClass = readClass.split('-');
  const setClass = '.px-' + arrayOfClass[1] + '-' + arrayOfClass[2];
  const paint = document.querySelector(setClass);

  selectedColor();
  paint.style.backgroundColor = selectedColor();
}

function selectedColor() {
  let whatColorSelected = document.querySelector('.selected').classList[1];
  let elem = document.querySelector('.' + whatColorSelected);
  let color = getComputedStyle(elem).backgroundColor;
  return color;
}