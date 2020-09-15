const linesCols = 5;
const divPixelBoard = document.getElementById('pixel-board');
const btnClearBoard = document.getElementById('clear-board');
let selected = 'black';

function createLines(numberOfLines) {
  for (let lines = 1; lines <= numberOfLines; lines += 1) {
    const line = document.createElement('div');
    line.id = `line ${lines}`;
    line.className = 'line';
    divPixelBoard.appendChild(line);
  }
}

function fillLinesWithPixels(numberOfPixels) {
  for (let lines = 1; lines <= numberOfPixels; lines += 1) {
    for (let pixels = 1; pixels <= numberOfPixels; pixels += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      const line = document.getElementById(`line ${pixels}`);
      line.appendChild(pixel);
    }
  }
}

function getColor() {
  const palletePixels = document.getElementsByClassName('pallete-pixel');
  document.addEventListener(
    'click',
    function (event) {
      if (event.target.classList.contains('pallete-pixel')) {
        for (
          let element = 0;
          element <= palletePixels.length - 1;
          element += 1
        ) {
          palletePixels[element].classList.remove('selected');
        }
        event.target.className += ' selected';
        selected = event.target.id;
      }
    },
    false
  );
}

function paintPixel() {
  document.addEventListener(
    'click',
    function (event) {
      if (event.target.classList.contains('pixel')) {
        event.target.style.backgroundColor = selected;
      }
    },
    false
  );
}

function clearPixelBoard() {
  const pixelBoard = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel <= pixelBoard.length - 1; pixel += 1) {
    pixelBoard[pixel].style.backgroundColor = 'white';
  }
}

createLines(linesCols);
fillLinesWithPixels(linesCols);
getColor();
paintPixel();
btnClearBoard.addEventListener('click', clearPixelBoard);
