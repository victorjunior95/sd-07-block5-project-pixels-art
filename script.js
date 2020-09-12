const black = document.getElementById('black');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const pixels = document.getElementsByClassName('pixel');

function selectColor (element, color) {
  removeAll();
  element.className = `color ${color} selected`
}

function removeAll () {
  black.classList.remove('selected');
  blue.classList.remove('selected');
  green.classList.remove('selected');
  red.classList.remove('selected');
}

blue.addEventListener('click', () => selectColor(blue, 'blue'));
black.addEventListener('click', () => selectColor(black, 'black'));
green.addEventListener('click', () => selectColor(green, 'green'));
red.addEventListener('click', () => selectColor(red, 'red'));
