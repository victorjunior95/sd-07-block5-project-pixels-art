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

  if (size.value !== '') {
    eliminaTags();

    if(size.value < 5){
      size.value = 5;
    }

    criaTag(size.value);
    
    pixels.forEach((pixel) => {
      if (parseInt(size.value) > 0) {
        pixel.style.width = size.value + 'px';
        pixel.style.height = size.value + 'px';
        pixel.style.backgroundColor = 'white';
      }
    });
  } else {
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

    for (let pos = 0; pos < num; pos += 1) {
      let neto = document.createElement('div');
      neto.className = 'pixel';
      novoFilho.appendChild(neto);
    }

    pai.appendChild(novoFilho);
  }
}

/** FONTE: http://www.criarweb.com/artigos/gerar-cor-aleatoria-javascript.html#:~:text=Para%20criar%20uma%20cor%20aleat%C3%B3rio,c%C3%B3digo%20de%20uma%20cor%20aleat%C3%B3ria. */

function aleatorio(inferior, superior) {
  const numPossibilidades = superior - inferior
  let aleat = Math.random() * numPossibilidades
  aleat = Math.floor(aleat)
  return parseInt(inferior) + aleat
}


function gerarCorAleatoria() {
  const hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F")
  let cor_aleatoria = "#";
  const qtdCaracters = 6;

  for (i = 0; i < qtdCaracters; i += 1) {
    let posarray = aleatorio(0, hexadecimal.length)
    cor_aleatoria += hexadecimal[posarray]
  }
  return cor_aleatoria
}
