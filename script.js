const colorPalette = document.getElementById('color-palette');
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');

const divPixel = document.getElementsByClassName('pixel');

const buttonBlack = document.querySelector('.black');
const buttonRed = document.querySelector('.red');
const buttonGreen = document.querySelector('.green');
const buttonBlue = document.querySelector('.blue');

let currentColor = '';

buttonBlack.addEventListener('click', selectColor);
buttonRed.addEventListener('click', selectColor);
buttonGreen.addEventListener('click', selectColor);
buttonBlue.addEventListener('click', selectColor);

function selectColor(event) {
  currentColor = event.target.classList[1];
}

function fillColor(event) {
  event.target.style.backgroundColor = currentColor;
}

function addClickListener() {
  for (let element of divPixel) {
    element.addEventListener('click', fillColor);
  }
}

addClickListener();