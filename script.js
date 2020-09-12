const clearButton = document.querySelector('#clear-board');
const coloredPixels = document.querySelectorAll('.pixel');
const pixelsBoard = document.querySelector('#pixel-board');
const paletas = document.querySelectorAll('.color');
let paletaID = 'black';

function defineColor() {
  let paleta = event.target;
  paletaID = paleta.getAttribute('id');
  console.log(paletaID)
}


for( let paleta of paletas) {
  paleta.addEventListener('click', defineColor);
}
function paintBoard() {
  console.log(paletaID)
  if (paletaID === 'red') {
    event.target.classList.add('red');
  } else if (paletaID === 'blue') {
    event.target.classList.add('blue');
  } else if (paletaID === 'green') {
    event.target.classList.add('green');
  } else {
  event.target.classList.add('black');
  }
}
for (let coloredPixel of coloredPixels) {
  coloredPixel.addEventListener('click', paintBoard)
}



clearButton.addEventListener('click', function clearBoard() {
  for (let i = 0; i < coloredPixels.length; i += 1) {
    coloredPixels[i].className = 'pixel white';
  }  
});
