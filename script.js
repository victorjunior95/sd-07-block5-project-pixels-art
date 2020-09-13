const pixelBoard = document.querySelector('#pixel-board');
let sizeOfBoard = [5, 5];
let numberOfPixels = sizeOfBoard[0] * sizeOfBoard[1];
pixelBoard.style.heigth = (sizeOfBoard[0] * 42) + 'px';
pixelBoard.style.width = (sizeOfBoard[1] * 42) + 'px';

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
}

function paintPixel (readClass) {
  const coord = readClass.match(/\d/g);
  const setClass = '.px' + coord[0] + '-' + coord[1];
  const paint = document.querySelector(setClass);
  paint.style.backgroundColor = 'black';
}
