const pixelBoard = document.querySelector('#pixel-board');
let sizeOfBoard = [5, 5];
let numberOfPixels = sizeOfBoard[0]*sizeOfBoard[1];
pixelBoard.style.heigth = (sizeOfBoard[0] * 42) + 'px';
pixelBoard.style.width = (sizeOfBoard[1] * 42) + 'px';

window.onload = function () {
  //  pixels generator
  for (let yIndex = 0; yIndex < sizeOfBoard[1]; yIndex += 1) {
    for (let xIndex = 0; xIndex < sizeOfBoard[0]; xIndex += 1) {
      const setClass = 'pixel-' + (yIndex + 1).toString() + '-' + (xIndex + 1).toString();
      const pixels = document.createElement('div');
      pixels.className = 'pixel';
      pixels.className += ' ' + setClass;
      pixelBoard.appendChild(pixels);
    }
  }
}
