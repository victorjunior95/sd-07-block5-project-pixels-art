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

