// Adding palette colors via script
let colorPalette = document.querySelector('#color-palette');
let colors = ['black', 'red', 'green', 'blue'];


for (let index = 0; index < colors.length; index += 1) {
  let color = document.createElement('div')
  color.className = 'color'
  color.style.backgroundColor = colors[index];

  if (color.style.backgroundColor == 'black') {
    color.className += ' selected'
  }
  // palette select color
  color.addEventListener('click', function(event) {
    for (let index = 0; index < colorPalette.children.length; index +=1) {
      colorPalette.children[index].className = 'color'
      console.log(index)
    }
    event.target.className += ' selected'
  })

  colorPalette.appendChild(color)
}

// Board of pixels
let pixelBoard = document.querySelector('#pixel-board');
let numberRowsPixBoard = 5;
let numberColumnsPixBoard = 5;
for (let column = 0; column < numberColumnsPixBoard; column += 1) {
  //Creating row for the pixels
  let pixelsRow = document.createElement('div');
  pixelsRow.className = 'pixels-row';
  for (let row = 0; row < numberRowsPixBoard; row += 1) {
    //  Creating the pixel
    let pixel = document.createElement('div');
    pixel.className = 'pixel';

    // Event for fill pixel with selected color
    pixel.addEventListener('click', function(event) {
      let selected = document.querySelector('.selected')
      event.target.style.backgroundColor = selected.style.backgroundColor;
    })

    pixelsRow.appendChild(pixel);
  }
  pixelBoard.appendChild(pixelsRow);
}

// select color

