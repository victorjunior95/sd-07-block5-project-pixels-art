// Função que gera um número pseudo aleatório de 0 até 255
function rndRGB() {
  return (Math.floor(parseInt(Math.random() * 255)));
}

// Função que retorna um RGB com as três cores aleatórias
function randRGB() {
  return (`rgb(${rndRGB()} , ${rndRGB()} , ${rndRGB()})`);
}

function testBoardSize() {
  if (boardSize.value == '') {
    alert('Board inválido!');
    return (false);
  }
  else {
    if (parseInt(boardSize.value) < parseInt(boardSize.min)) {
      boardSize.value = boardSize.min;
    }
    if (parseInt(boardSize.value) > parseInt(boardSize.max)) {
      boardSize.value = boardSize.max;
    }
  }
  return (true);
}

// função que gera as linhas e colunas dos pixels
function pixelGenerator(N) {
  // N é o número de linhas / colunas da matriz de pixels

  //Testa se o boardSize possui um valor válido
  if (!testBoardSize()) {
    return (false);
  }

  // Essa linha mata todas as divs de Linhas e de pixels que estão dentro do pixelBoard
  // Idealmente seria bom usar o removeChild
  pixelBoard.innerHTML = '';

  // Redimensionando o Board
  let dimension = (40 * N) + (2 * N);
  pixelBoard.style.height = dimension + 'px';
  pixelBoard.style.width = dimension + 'px';

  // Reposicionando no centro da tela
  let main=document.querySelector('main');
  // Resetando as dimensões da MAIN
  main.style.height = 'calc(100% - 165px)';
  main.style.width = '100%';

  let canvas = document.querySelector('.canvas');
  let heightMain = parseInt(window.getComputedStyle(main).height);
  let widthMain = parseInt(window.getComputedStyle(main).width);
  let canvasTop = heightMain / 2 - dimension / 2;
  let canvasLeft = widthMain / 2 - dimension / 2;

  if (canvasTop < 10) {
    canvasTop = 10;
  }
  if (canvasLeft < 10) {
    canvasLeft = 10;
  }

  // Aumenta as dimensões da MAIN (colocando rolagem) se o box size ficar muito grande
  if (heightMain <= (dimension + 2 * 7 + 2 * 1 + 2 * 10)) {
    main.style.height = (dimension + 2 * 7 + 2 * 1 + 2 * 20) + 'px';
  }
  if (widthMain <= (dimension + 2 * 7 + 2 * 1 + 2 * 10)) {
    main.style.width = (dimension + 2 * 7 + 2 * 1 + 2 * 20) + 'px';
  }
  canvas.style.top = canvasTop + 'px';
  canvas.style.left = canvasLeft + 'px';

  // Nesse FOR é criada as linhas
  for (let i = 0; i < N; i += 1) {
    divLines[i] = document.createElement('div');
    divLines[i].className = 'boardLines'
    pixelBoard.appendChild(divLines[i]);

    // Cria os N pixels na linha i
    for (let  j = 0; j < N; j += 1) {
      pixel[i * N + j] = document.createElement('div');
      pixel[i * N + j].className = 'pixel';
      divLines[i].appendChild(pixel[i * N + j]);
    }
  }
}

function addListener() {

}

//Container que armazena as linhas e os pixels
let pixelBoard = document.getElementById('pixel-board');
// Número de linhas e culunas de pixels
let boardSize = document.getElementById('board-size');

let boardLines = boardSize.value;
let divLines = [];
let pixel = [];

// Gerando os pixels ao carregara página
pixelGenerator(boardSize.value);

// obtendo cores aleatórias
let colorSelected = document.getElementsByClassName('color');
colorSelected[1].style.backgroundColor = randRGB();
colorSelected[2].style.backgroundColor = randRGB();
colorSelected[3].style.backgroundColor = randRGB();

// Selecionando as cores de pintura
let colorPalette = document.getElementById("color-palette");

colorPalette.addEventListener("click", function(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');

  let fontColor = document.getElementsByClassName('colorFont');
    fontColor[0].style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
});

pixelBoard.addEventListener('click', function(event) {
  let color = document.querySelector('.selected');
  //let selected = document.querySelectorAll('.selected')
  event.target.style.backgroundColor = window.getComputedStyle(color).backgroundColor;
  //pixel[i].style.backgroundColor = getComputedStyle(cor).backgroundColor;
});

let buttonClear= document.getElementById('clear-board');

buttonClear.addEventListener('click', function () {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

boardSize.addEventListener('blur', testBoardSize);

let buttonGenerator = document.getElementById('generate-board');
buttonGenerator.addEventListener('click', function() {
  pixelGenerator(boardSize.value);
})
