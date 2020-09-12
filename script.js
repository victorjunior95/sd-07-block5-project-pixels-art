const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');

function clearPixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function applyColor(event) {
  const colorToApply = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(colorToApply, null);
  event.target.style.backgroundColor = cssObj.getPropertyValue('background-color');
}

function changeSelectedColor(event) {
  for (let index = 0; index < colors.length; index += 1) {
    switch (index) {
      case 0:
        colors[0].className = 'color size-color-rectangle black';
        break;
      case 1:
        colors[1].className = 'color size-color-rectangle random-color1';
        break;
      case 2:
        colors[2].className = 'color size-color-rectangle random-color2';
        break;
      case 3:
        colors[3].className = 'color size-color-rectangle random-color3';
        break;
    }
  }
  event.target.className = event.target.className + ' selected';
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', applyColor);
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', changeSelectedColor);
}

document.querySelector('.button-clear').addEventListener('click', clearPixel);
