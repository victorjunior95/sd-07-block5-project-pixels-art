const BLACK = 0;
const RED = 1;
const BLUE = 2;
const GREEN = 3;

const botaoLimpar = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

const colorBlack = document.querySelector('.colorBlack');
const colorRed = document.querySelector('.colorRed');
const colorBlue = document.querySelector('.colorBlue');
const colorGreen = document.querySelector('.colorGreen');


const colors = document.querySelectorAll('.color');
let colorSelected = BLACK;

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
    colorSelected = index;
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
    if(colorSelected === BLACK) {
      element.style.backgroundColor = "black";
    }else if(colorSelected === RED){
      element.style.backgroundColor = "red";
    }else if(colorSelected === BLUE){
      element.style.backgroundColor = "blue";
    }else{
      element.style.backgroundColor = "green";
    }
  });
});

