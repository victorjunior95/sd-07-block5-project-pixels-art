const pixels = document.getElementsByClassName('pixel');
let pixelSelectedCurrent;

function addSelectedCurrent(pixel) {
  pixel.className += ' selected';
  pixelSelectedCurrent = pixel;
}

function emptySelectedCurrent() {
  pixelSelectedCurrent.className = 'pixel';
}

for(let index = 0; index < pixels.length; index += 1){
  pixels[index].addEventListener('click', function(event){
    if (pixelSelectedCurrent) emptySelectedCurrent();
    addSelectedCurrent(pixels[index]);
  });
}

const colors = document.getElementsByClassName('color');

const colorsConfig = {
  color1: 'black',
  color2: 'red',
  color3: 'green',
  color4: 'blue',
}

for(let index = 0; index < colors.length; index += 1){
  colors[index].addEventListener('click', function(event){
    let pixel = document.getElementsByClassName('pixel selected')[0];
    pixel.style.backgroundColor = colorsConfig[`${event.target.id}`];
  });
}

