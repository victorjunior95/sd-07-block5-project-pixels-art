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
botaoSize.addEventListener('click', function () {
  let size = document.getElementById('board-size');
  
  eliminaTags();
  criaTag(size.value);

    if (size.value !== '') {
      pixels.forEach((pixel) => {
        if (parseInt(size.value) > 0) {
          pixel.style.width = size.value + 'px';
          pixel.style.height = size.value + 'px';
          pixel.style.backgroundColor = 'white';        
        }
      });
    }else{
      alert("Board inválido!");
    }  
    size.value = '';
});

function eliminaTags() {
  let netos = document.querySelectorAll('.pixel');
  let filhos = document.querySelectorAll('.pixel-linha');

  netos.forEach((item) => {
    item.parentNode.removeChild(item);
  });


  filhos.forEach((item) => {
    item.parentNode.removeChild(item);
  });
}


function criaTag(num) {
  let pai = document.getElementById('pixel-board');

  for (let index = 0; index < num; index += 1) {
    let novoFilho = document.createElement('div');
    novoFilho.classList.add('pixel-linha');

    for(let pos = 0; pos < num; pos += 1){
      let neto = document.createElement('div');
      neto.className='pixel';
      novoFilho.appendChild(neto);
    }

    pai.appendChild(novoFilho);
  }
}

