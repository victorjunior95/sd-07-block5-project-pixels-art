const pixelBoard = document.querySelector('#pixel-board');
let sizeOfBoard = [5, 5];
let numberOfPixels = sizeOfBoard[0] * sizeOfBoard[1];
pixelBoard.style.heigth = (sizeOfBoard[0] * 42) + 'px';
pixelBoard.style.width = (sizeOfBoard[1] * 42) + 'px';
const colorPalette = document.querySelector('#color-palette');
const firstColor = document.querySelector('.color0');
const secondColor = document.querySelector('.color1');
const thirdColor = document.querySelector('.color2');
const forthColor = document.querySelector('.color3');

window.onload = function () {
  //  pixels generator
  for (let yIndex = 0; yIndex < sizeOfBoard[1]; yIndex += 1) {
    for (let xIndex = 0; xIndex < sizeOfBoard[0]; xIndex += 1) {
      const setClass = 'px' + (yIndex + 1).toString() + '-' + (xIndex + 1).toString();
      const pixels = document.createElement('div');
      const pixelsStyle = document.createElement('style');
      pixels.setAttribute('onclick', 'paintPixel(this.className)');
      pixels.className = 'pixel';
      pixels.className += ' ' + setClass;
      pixelBoard.appendChild(pixels);
      pixels.appendChild(pixelsStyle);
    }
  }

  firstColor.addEventListener('click', setColorPalette);
  secondColor.addEventListener('click', setColorPalette);
  thirdColor.addEventListener('click', setColorPalette);
  forthColor.addEventListener('click', setColorPalette);
}

//  color selector
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

function paintPixel (readClass) {
  const coord = readClass.match(/\d/g);
  const setClass = '.px' + coord[0] + '-' + coord[1];
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
