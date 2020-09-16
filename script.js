const black = document.querySelector('.black');
const white = document.querySelector('.white');
const cyan = document.querySelector('.cyan');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
let corSelecionada = '#000000';
const reset = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

function changeColor(color) {
  if (color === 'black') {
    corSelecionada = '#000000';
  } else if (color === 'white') {
    corSelecionada = '#fdfffc';
  } else if (color === 'cyan') {
    corSelecionada = '#2ec4b6';
  } else if (color === 'red') {
    corSelecionada === '#e71d36';
  } else {
    corSelecionada === '#ff9f1c';
  };
};

black.addEventListener('click', changeColor('black'));

white.addEventListener('click', changeColor('white'));

cyan.addEventListener('click', changeColor('cyan'));

red.addEventListener('click', changeColor('red'));

orange.addEventListener('click', changeColor('orange'));

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', function () {
    pixels[i].style.backgroundColor = corSelecionada;
  });
};

reset.addEventListener('click', function () {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i] = pixels[i].style.backgroundColor = '#ffffff';
  };
  corSelecionada = '#000000';
});
