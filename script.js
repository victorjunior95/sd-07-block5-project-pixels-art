const black = document.querySelector('.black');
const cyan = document.querySelector('.cyan');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
let corSelecionada = '#000000';
const reset = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

function changeColor(color) {
  console.log(color);
  if (color === 'black') {
    corSelecionada = '#000000';
  } else if (color === 'cyan') {
    corSelecionada = '#2ec4b6';
  } else if (color === 'red') {
    corSelecionada = '#e71d36';
  } else if (color === 'orange') {
    corSelecionada = '#ff9f1c';
  };
};

black.addEventListener('click', function () {
  changeColor('black');
});

cyan.addEventListener('click', function () {
  changeColor('cyan');
});

red.addEventListener('click', function () {
  changeColor('red');
});

orange.addEventListener('click', function () {
  changeColor('orange');
});

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
