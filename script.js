let paleta = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let pixels = document.querySelectorAll('.pixel');



function limpar() {
  let pixels = document.querySelectorAll('.pixel');
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
}

paleta.addEventListener('click', function() {
  pixels.style = paleta;
});

window.onload = function () {
  makeBoard(5);
};

buttonInput.addEventListener('click', function () {
  const numberInput = document.querySelector('#board-size').value;
  const number = numberInput;
  if (number === '') {
    alert('Board inválido!');
  } else if (number < 5) {
    makeBoard(5);
  } else if (number > 50) {
    makeBoard(50);
  } else {
    makeBoard(number);
  }
});

