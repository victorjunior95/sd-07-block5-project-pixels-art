let paleta = document.getElementById('color-palette');

let button = documente.getElementById('clear-board');
button.addEventListener('click', clear);

function limpar() {
  let pixels = documente.querySelectorAll('.pixel');
  for(let index = 0; index < pixels.length; index += 1){
    pixels[index].style.backgroundColor = 'white';
  }
}


