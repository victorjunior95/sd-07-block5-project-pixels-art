// Adding palette colors via script
let colorPalette = document.querySelectorAll('.color');
let colors = ['black', 'red', 'green', 'blue'];

for (let index = 0; index < colors.length; index += 1) {
  colorPalette[index].style.backgroundColor = colors[index];
}

// Board of pixels
let pixelBoard = document.querySelector('#pixel-board');
let numberRowsPixBoard = 5;
let numberColumnsPixBoard = 5;

for (let column = 0; column < numberColumnsPixBoard; column += 1) {
  let pixelsRow = document.createElement('div')
  pixelsRow.className = 'pixels-row'
  for (let row = 0; row < numberRowsPixBoard; row += 1) {
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    pixelsRow.appendChild(pixel)
  }
  pixelBoard.appendChild(pixelsRow)
  console.log(pixelBoard)
}
