const cores = document.querySelectorAll('.color');
cores[0].style.backgroundColor = 'black';
RgbAlea();
const pixelBoard = document.querySelector('#pixel-board');
window.onload = function () {
  cores[0].classList.add('selected');
  pixelCor();
};
generatePixel(25);
function generatePixel(quadrados) {
  for (index = 0; index < quadrados; index += 1) {
    stylePixel();
  }
}

function pixelCor() {
  pixel = document.querySelectorAll('.pixel');
  pixel.forEach((item) => {
    item.addEventListener('click', function () {
      item.style.backgroundColor = document.querySelector(
        '.selected'
      ).style.backgroundColor;
    });
  });
}

function stylePixel() {
  let caixa = document.createElement('div');
  caixa.className = 'pixel';
  caixa.style.backgroundColor = 'white';
  caixa.style.height = '40px';
  caixa.style.width = '40px';
  caixa.style.border = '1px solid black';
  caixa.style.display = 'inline-block';
  pixelBoard.appendChild(caixa);
}

function apagao() {
  pixel.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
}

function inputSize() {
  let inputValue = document.querySelector('#board-size').value;
  if (inputValue > 50) {
    return (inputValue = 50);
  } else if (inputValue < 5) {
    return (inputValue = 5);
  } else {
    return inputValue;
  }
}

function removeAll() {
  while (pixelBoard.firstElementChild) {
    pixelBoard.removeChild(pixelBoard.firstElementChild);
  }
}

function RgbAlea() {
  cores[1].style.backgroundColor = `rgb(${Math.ceil(
    Math.random() * 255
  )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
  cores[2].style.backgroundColor = `rgb(${Math.ceil(
    Math.random() * 255
  )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
  cores[3].style.backgroundColor = `rgb(${Math.ceil(
    Math.random() * 255
  )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
}

function nulll() {
  let inputValue = document.querySelector('#board-size').value;
  if (inputValue == '') {
    alert('Board inválido!');
  }
}
// Cor preta selecionada
cores[0].addEventListener('click', function () {
  for (index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[0].classList.add('selected');
});
// Cor azul selecionada
cores[1].addEventListener('click', function () {
  for (index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[1].classList.add('selected');
});
// Cor vermelha selecionada
cores[2].addEventListener('click', function () {
  for (index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[2].classList.add('selected');
});
// Cor verde selecionada
cores[3].addEventListener('click', function () {
  for (index = 0; index < 4; index += 1) {
    cores[index].className = 'color';
  }
  cores[3].classList.add('selected');
});
let pixel = document.querySelectorAll('.pixel');
const apaga = document.querySelector('.clear');
apaga.addEventListener('click', apagao);
const inputButton = document.querySelector('#generate-board');

inputButton.addEventListener('click', function () {
  nulll();
  let inputValue = inputSize();
  pixelBoard.style.height = inputValue * 42 + 'px';
  pixelBoard.style.width = inputValue * 42 + 'px';
  removeAll();
  generatePixel(inputValue * inputValue);
  pixelCor();
});
