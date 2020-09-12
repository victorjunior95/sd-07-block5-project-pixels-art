const divPixel = document.getElementsByClassName('pixel');
const buttonBlack = document.querySelector('.black');
const buttonRed = document.querySelector('.red');
const buttonGreen = document.querySelector('.green');
const buttonBlue = document.querySelector('.blue');
const buttonColor = document.getElementsByClassName('color');
const buttonClear = document.getElementById('clear-board');
let currentColor = 'black';

buttonBlack.addEventListener('click', selectColor);
buttonRed.addEventListener('click', selectColor);
buttonGreen.addEventListener('click', selectColor);
buttonBlue.addEventListener('click', selectColor);
buttonClear.addEventListener('click', clearBoard);

function selectColor(event) {
  for (let element of buttonColor) {
    if (element.classList[2] === 'selected') {
      element.classList.toggle('selected');
    }
  }
  event.target.classList.toggle('selected');
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

function clearBoard() {
  for (let element of divPixel) {
    element.style.backgroundColor = 'white';
  }
}

addClickListener();