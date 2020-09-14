const COR = ['black', 'red', 'blue', 'green'];


const botaoLimpar = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

const colorBlack = document.querySelector('.colorBlack');
const colorRed = document.querySelector('.colorRed');
const colorBlue = document.querySelector('.colorBlue');
const colorGreen = document.querySelector('.colorGreen');


const colors = document.querySelectorAll('.color');
let posColor = 0;

// Criar seleção de cores
/** Passos do algoritimo: 
 * 1 - retiro qualquer ocorrencia da classe 'selected' com a função retiraSelected;
 * 2 - atribuo ao elemento clicado a classe 'selected';
 * 3 - atribuo o elemento clicado a variavel posColor;
 */

colors.forEach((element, index, array) => {
  element.addEventListener('click', event => {
    retiraSelected(array);
    element.className += ' selected';
    posColor = index;
  });
})

function retiraSelected(elements) {
  elements.forEach((elem) => {
    elem.className = elem.className.replace(' selected', '');
  })
}

//Limpar cor dos pixels

botaoLimpar.addEventListener('click', function () {
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

//Atribui cor aos pixels
pixels.forEach((element) => {
  element.addEventListener('click', event => {
      element.style.backgroundColor = COR[posColor];
  });
});
