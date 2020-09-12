const colorsPallet = {
  color1: 'black',
  color2: 'red',
  color3: 'green',
  color4: 'blue',
}

let colorSelected = colorsPallet.color1;

const colors = document.getElementsByClassName('color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function (event) {
    colorSelected = colorsPallet[`${event.target.id}`];
  });
}

const pixels = document.getElementsByClassName('pixel');

let pixelCurrent;

function pixelDefault() {
  pixelCurrent.className = 'pixel';
}

function addPixelCurrent(pixel) {
  pixel.className += ' selected';
  pixelCurrent = pixel;
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (event) {
    if (pixelCurrent) pixelDefault();
    addPixelCurrent(event.target);
    if (pixelCurrent) pixelCurrent.style.backgroundColor = colorSelected;
  });
}