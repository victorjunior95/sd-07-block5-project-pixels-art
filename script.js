const colorPalette = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
let sizeOfBoard = [5, 5];
let numberOfPixels = sizeOfBoard[0]*sizeOfBoard[1];
pixelBoard.style.heigth = (sizeOfBoard[0]*40) + "px";
pixelBoard.style.width = (sizeOfBoard[1]*40) + "px";

window.onload = function() {
  //pixels generator
  for ( yIndex = 0; yIndex < sizeOfBoard[1]; yIndex += 1) {
    for ( xIndex = 0; xIndex < sizeOfBoard[0]; xIndex += 1) {
      let setClass = "pixel-" + (yIndex + 1).toString() + "-" + (xIndex + 1).toString();
      let pixels = document.createElement("div");
      pixels.className = "pixel";
      pixels.className += " " + setClass;
      pixelBoard.appendChild(pixels);
  }
  }
}
