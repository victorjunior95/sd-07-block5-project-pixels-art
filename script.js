const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
const paletas = document.querySelectorAll('.color');
let paletaID = 'black';

function defineColor() {
  const paletaSelecionada = event.target;
  paletaID = paletaSelecionada.getAttribute('id');
}

for (let k = 0; k < paletas.length; k += 1) {
  paletas[k].addEventListener('click', defineColor);
}

function paintBoard() {
  if (paletaID === 'red') {
    event.target.classList.remove('white');
    event.target.classList.add('red');
  } else if (paletaID === 'blue') {
    event.target.classList.remove('white');
    event.target.classList.add('blue');
  } else if (paletaID === 'green') {
    event.target.classList.remove('white');
    event.target.classList.add('green');
  } else {
    event.target.classList.remove('white');
    event.target.classList.add('black');
  }
}

for (let i = 0; i < coloredPixels.length; i += 1) {
  coloredPixels[i].addEventListener('click', paintBoard);
}

clearButton.addEventListener('click', function clearBoard() {
  for (let i = 0; i < coloredPixels.length; i += 1) {
    coloredPixels[i].className = 'pixel white';
    paletaID = 'black';
  }  
})
