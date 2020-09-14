const botaoLimpar = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

const colorBlack = document.querySelector('.colorBlack');
const colorRed = document.querySelector('.colorRed');
const colorBlue = document.querySelector('.colorBlue');
const colorGreen = document.querySelector('.colorGreen');

let colorSelected = null;
const colors = document.querySelectorAll('.color');


// Criar seleção de cores
/** Passos do algoritimo: 
 * 1 - retiro qualquer ocorrencia da classe 'selected' com a função retiraSelected;
 * 2 - atribuo ao elemento clicado a classe 'selected';
 * 3 - atribuo o elemento clicado a variavel colorSelected;
 */

colors.forEach((element, index, array) => {
  element.addEventListener('click', event => {
    retiraSelected(array);
    element.className += ' selected';
    colorSelected = element;
  });
})

function retiraSelected(elements) {
  elements.forEach((elem) => {
    elem.className = elem.className.replace(' selected', '');
  })
}


botaoLimpar.addEventListener('click', function () {
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

//selecionar cor

pixels.forEach((element) => {
  element.addEventListener('click', event => {
    mudaCor()
  });
});


function mudaCor() {
  console.log('clicado');
}
