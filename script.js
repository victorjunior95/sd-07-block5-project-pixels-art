//Código adaptado de:
//https://github.com/tryber/sd-07-block5-project-pixels-art/pull/55/files
//Colega wberilo
function boardGenerator(value) {
    const board = document.getElementById('pixel-board');
    for (let indexL = 0; indexL < value; indexL += 1) {
      const line = document.createElement('div');
      for (let indexC = 0; indexC < value; indexC += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.id = 'pixel';
        line.appendChild(pixel);
      }
      board.appendChild(line);
      attribute();
    }
  }


let currentColor = document.querySelectorAll('.selected');
function select(event) {
  currentColor.classList.remove('selected');
  event.target.classList.add('selected');
  currentColor = event.target;
}

const color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', select);
}

function newColor(event) {
  event.target.style.backgroundColor = getComputedStyle(currentColor).backgroundColor;
}

function attribute() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', newColor);
  }
}


boardGenerator(5);