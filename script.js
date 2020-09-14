let colorPalette = document.querySelector('#color-palette');
let pixelBoard = document.querySelector('#pixel-board');
let colors = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.color');
let selectedColor = 'black';

colorPalette.addEventListener('color', function (event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.className += 'selected';
  selectedColor = event.target.style.backgroundColor;
});