const colorPalette = document.querySelector('#color-palette');
const pixelboard = document.querySelectorAll('.pixel');


makePixelBoard(pixelboard);

function makePixelBoard(boradLines) {
 for (let index = 0; index < pixelboard.length; index += 1) {
    printLine(boradLines[index]);
 }
}

function printLine(lineToPrint) {
  for(let index = 0; index < pixelboard.length; index += 1) {
      let pixelLine = createPixel('perPixel')
      lineToPrint.appendChild(pixelLine);
  }
} 

function createPixel(className) {
  let pixel = document.createElement('div');
  pixel.className = className
  return pixel;
}