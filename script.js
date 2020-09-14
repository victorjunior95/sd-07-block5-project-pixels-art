// Adding palette colors via script
const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'red', 'green', 'blue'];


for (let index = 0; index < colors.length; index += 1) {
  const color = document.createElement('div');
  color.className = 'color';
  color.style.backgroundColor = colors[index];

  if (color.style.backgroundColor === 'black') {
    color.className += ' selected';
  }
  // palette select color
  color.addEventListener('click', function (event) {
    for (let indexPaletteColor = 0; indexPaletteColor < colorPalette.children.length; indexPaletteColor += 1) {
      colorPalette.children[indexPaletteColor].className = 'color';
    }
    event.target.className += ' selected';
  });

  colorPalette.appendChild(color);
}

// Board of pixels
const pixelBoard = document.querySelector('#pixel-board');
const numberRowsPixBoard = 5;
const numberColumnsPixBoard = 5;
for (let column = 0; column < numberColumnsPixBoard; column += 1) {
  // Creating row for the pixels
  const pixelsRow = document.createElement('div');
  pixelsRow.className = 'pixels-row';
  for (let row = 0; row < numberRowsPixBoard; row += 1) {
    // Creating the pixel
    const pixel = document.createElement('div');
    pixel.className = 'pixel';

    // Event for fill pixel with selected color
    pixel.addEventListener('click', function (event) {
      const selected = document.querySelector('.selected');
      event.target.style.backgroundColor = selected.style.backgroundColor;
    });
    pixelsRow.appendChild(pixel);
  }
  pixelBoard.appendChild(pixelsRow);
}

// clear all pixels
const clear = document.querySelector('#clear-board');
const pixels = document.querySelectorAll('.pixel');
clear.addEventListener('click', function () {
  for (let filledPixel = 0; filledPixel < pixels.length; filledPixel += 1) {
    pixels[filledPixel].style.backgroundColor = 'white';
  }
});
