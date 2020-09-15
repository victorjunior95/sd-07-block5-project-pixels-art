// Cria as cores da paleta
for (let i = 0; i < 4; i += 1) {
  const colorPalette = document.getElementById('color-palette');
  const colorDiv = document.createElement('div');
  colorPalette.appendChild(colorDiv);

  const arrayOfColors = ['black', 'salmon', 'green', 'blue'];
  for (let j = 0; j < arrayOfColors.length; j += 1) {
    if (i === j) {
      colorDiv.className = `color ${arrayOfColors[j]}`;
    }
  }
};

// Cria o quadro de pixels
window.onload = function () {

  function createBox() {
    const box = document.createElement('div');
    box.className = 'pixel';
    return box;
  }
  for (let i = 0; i < 5; i += 1) {
    const board = document.getElementById('pixel-board');
    const lineBoardBox = document.createElement('div');
    for (let j = 0; j < 5; j += 1) {
      lineBoardBox.appendChild(createBox());
    }
    board.appendChild(lineBoardBox).className = 'pixel-line';
  }
};

// Seleciona a cor para pintar o pixel
let selectedColor = document.querySelectorAll('.color');
for (let index = 0; index < selectedColor.length; index += 1) {
  if (selectedColor[index].className === 'color black') {
    selectedColor[index].className += ' selected';
  }
}

function pickedColor() {
  let pickColor = document.querySelector('.selected');
  let color = window.getComputedStyle(pickColor).getPropertyValue('background-color');

}

// let pickColor = selectedColor;
// pickColor.addEventListener('click', pickedColor);

// function paintPixel() {
  
//   let pickedPixel = document.querySelectorAll('pixel');
//   pickedPixel.style.backgroundColor = pickedColor;
// }

// let pickedPix = document.querySelector('pixel');
// pickedPix.addEventListener('click', paintPixel);

// Reseta a cor branca dos pixels
function turnWhite() {
  const paintedPixel = document.querySelectorAll('.pixel');
  paintedPixel.style.backgroundColor = 'white';
}
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', turnWhite);
