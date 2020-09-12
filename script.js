const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
const paletas = document.querySelectorAll('.color');
let paletaID = 'black';

for (let paleta of paletas) {
  paleta.addEventListener('click', function defineColor() {
    const paletaSelecionada = event.target;
    paletaID = paletaSelecionada.getAttribute('id');
  });
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
for (let coloredPixel of coloredPixels) {
  coloredPixel.addEventListener('click', paintBoard);
}

clearButton.addEventListener('click', function clearBoard() {
  for (let i = 0; i < coloredPixels.length; i += 1) {
    coloredPixels[i].className = 'pixel white';
  }  
})
