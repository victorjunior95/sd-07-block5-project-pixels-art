const COR = ['black', 'red', 'blue', 'green'];
const botaoLimpar = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
const botaoSize = document.getElementById('generate-board');
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

//Definindo as ações do botão de seleção de tamanho pelo usuario
function tamanhoPixels() {
  let size = document.getElementById('board-size');
  pixels.forEach((pixel) => {
    if (size.value !== '') {
      pixel.style.width = size.value + 'px';
      pixel.style.height = size.value + 'px';
    }
    alert("Board inválido!")
  });
}

window.onload = function () {
  botaoSize.addEventListener('click', tamanhoPixels);
}
