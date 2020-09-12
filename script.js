const colors = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('.pixel-board');

function dynamicBoard() {
  let matrixValue = document.querySelector('#board-size').value;

  if (matrixValue === 0) {
    alert('Board inválido!');
  } else if (matrixValue < 5 || matrixValue > 50) {
    alert('Valor tem que ser entre 5 e 50!');
  } else {
    let pixelQty = matrixValue*matrixValue;
    clearBoard();
    createBoard(pixelQty);
    pixelEventListener();
    resetSelectedColor();
  }
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixelBoard.removeChild(pixels[index]);
    console.log(`removido pixel ${index+1}`);
  }
}

function createBoard(nbPixelValue) {
  let pixelLine = Math.sqrt(nbPixelValue);
  let boardLength = (pixelLine * 42.222) + 2.222;
  document.querySelector('.pixel-board').style.height = boardLength + 'px';
  document.querySelector('.pixel-board').style.width = boardLength + 'px';

  for (let index = 0; index < nbPixelValue; index += 1){
    let pixelCreation = document.createElement('div');
    pixelCreation.className = 'pixel';
    pixelBoard.appendChild(pixelCreation);
    console.log(`criado pixel ${index+1}`);
  }
}

function clearPixel() {
  let pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
  resetSelectedColor();
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
      default:
        colors[3].className = 'color size-color-rectangle random-color3';
        break;
    }
  }
  event.target.className += ' selected';
}

function resetSelectedColor() {
  colors[0].className = 'color size-color-rectangle black selected';
  colors[1].className = 'color size-color-rectangle random-color1';
  colors[2].className = 'color size-color-rectangle random-color2';
  colors[3].className = 'color size-color-rectangle random-color3';
}

pixelEventListener();

function pixelEventListener() {
  let pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', applyColor);
  }
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', changeSelectedColor);
}

document.querySelector('.button-clear').addEventListener('click', clearPixel);

document.querySelector('#generate-board').addEventListener('click', dynamicBoard);
