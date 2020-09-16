let paleta = document.getElementById('color-palette');
let pixelBoard = document.getElementById('pixel-board');
let pixels = documente.querySelectorAll('.pixel');

let button = documente.getElementById('clear-board');
button.addEventListener('click', clear);

function limpar() {
  let pixels = documente.querySelectorAll('.pixel');
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
}

paleta.addEventListener('click', function() {
  pixels.style = paleta;
});

