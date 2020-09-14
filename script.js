const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.color');
const selectedColor = 'black';

colorPalette.addEventListener('color', function (event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.className += 'selected';
  selectedColor = event.target.style.backgroundColor;
});
