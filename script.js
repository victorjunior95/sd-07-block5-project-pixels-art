let paleta = document.querySelectorAll('.color'); // seleciona a paleta de cores
let corSelecionada = document.querySelector('.color-1'); // define a variável com a cor preta inicial

for (index = 0; index < paleta.length; index += 1) { // insere a classe selected onde for clicado
  let corAtual = paleta[index]; // define a cor atual de acordo com o indice do array "paleta"
    corAtual.addEventListener('click', function() { 
      for (index = 0; index < paleta.length; index += 1) { // apaga a classe selected de todos
        let removeClasse = paleta[index];
          removeClasse.classList.remove('selected');
        }
        corAtual.classList.add('selected');
        corSelecionada = corAtual; // armazena a cor atual numa variável global
    });
}

let quadro = document.querySelectorAll('.pixel'); // armazena todos os pixels num array
for (index = 0; index < quadro.length; index += 1) {
    let pixelSelecionado = quadro[index];
    pixelSelecionado.addEventListener('click', function() {
        pixelSelecionado.classList.add(corSelecionada.classList[1]); 
    }) // add a segunda classe da div selecionada ao pixel clicado
}

let botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', function() {
    for (index = 0; index < quadro.length; index += 1) { // passa por todo o quadro
        let limpaQuadro = quadro[index];
        limpaQuadro.className = ''; // apaga todas as classes nela
        limpaQuadro.classList.add('pixel'); // insere a classe padrão de volta
    }
})

let boardSize = document.getElementById('board-size');
let buttonGenerateBoard = document.getElementById('generate-board');
let pixelBoard = document.getElementById('pixel-board');
let removeLinhas = document.getElementsByClassName('linha');
let celula;
let linha;

buttonGenerateBoard.addEventListener('click', function() {
    if (boardSize.value == "") {
        alert('Board inválido!');
    }
    // remover quadro antigo
    for (let index = removeLinhas.length - 1; index >= 0 ; index -= 1){
        removeLinhas[index].remove(removeLinhas);
    }
    // inserir quadro novo
    for (let index = 0; index < boardSize.value; index += 1){
        let novaLinha = document.createElement('div');
        linha = pixelBoard.appendChild(novaLinha);
        linha.className = 'linha';
        for (let index = 0; index < boardSize.value; index += 1) {
            let novaCelula = document.createElement('div');
            linha.appendChild(novaCelula).className = 'pixel';
        }
    }
})

