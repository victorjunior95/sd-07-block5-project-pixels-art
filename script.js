const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');

let selectedColor = 'black';

colorPalette.addEventListener('click', function (event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.className += ' selected';
  selectedColor = event.target.style.backgroundColor;
});

pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = selectedColor;
});
