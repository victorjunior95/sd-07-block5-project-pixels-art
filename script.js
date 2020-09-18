// https://github.com/tryber/sd-07-block5-project-pixels-art/tree/Cainan6697-project-pixels-art
let defaultColor = 'black';

const selectColor = document.querySelector('.color-palette');
selectColor.addEventListener('click', function (event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.className += ' selected';
  defaultColor = event.target.style.backgroundColor;
});

const selectPixel = document.querySelector('table');
selectPixel.addEventListener('click', function (event) {
  event.target.style.backgroundColor = defaultColor;
});
// ---------------------------------------------------------------------------------------------


// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
const colors = document.querySelectorAll('.color');
for (let index = 0; index < colors.length; index += 1) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

if (index === 0) {
  colors[index].style.backgroundColor = 'black';
  } else {
    colors[index].style.backgroundColor = `rgb(${x},${y},${z})`;
  }
}
// ---------------------------------------------------------------------------------------------


// github.com/susanschen/Pixel-Art-Maker/blob/master/index.html
let canvas = document.getElementById('pixel-board');
let height = document.getElementById('board-size');
let width = document.getElementById('board-size');
let pixelBoard = document.getElementById('custom-board');

pixelBoard.onsubmit = function(event){
  event.preventDefault();
  clearGrid();
  makeGrid();
};

function clearGrid(){
  while (canvas.firstChild){
    canvas.removeChild(canvas.firstChild);
  }
}

function fillSquare () {
  this.setAttribute('style', `background-color: ${color.value}`);
}

function makeGrid() {
  for (let r=0; r<height.value; r++){
    const row = canvas.insertRow(r);
    for (let c = 0; c < width.value; c++){
      const cell = row.insertCell(c);
      cell.addEventListener('click', fillSquare);
      cell.className = 'pixel';
    }
  }
}

window.onload = function () {
  makeGrid(5);
}
// ---------------------------------------------------------------------------------------------


const alertVQV = document.querySelector('#board-size');
document.querySelector('#generate-board').addEventListener('click', function () {
  if (alertVQV.value === '') {
    alert('Board inválido!');
  } else if (alertVQV.value < 5) {
    alertVQV.value = 5;
  } else if (alertVQV.value > 50) {
    alertVQV.value = 50;
  }
});
