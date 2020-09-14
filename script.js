window.onload = function () {
  document.getElementsByClassName('color')[0].classList.add('selected');
};

const tabelaLinha = [1, 5];
const tipoTag = ['tr', 'tr'];
const tipoTag2 = ['th', 'td'];
const qualIdVincular = ['color-palette', 'pixel-board'];
const nomeClasse = ['color', 'pixel'];
const tabelaCelula = [4, 5];
const classeVinculo = ['paletaCoresLinha', 'pixelLinha'];

function linhaTabela(tpTag, idVinculo, classVinculo) {
  const quadradinho = document.createElement(tpTag);
  document.getElementById(idVinculo).appendChild(quadradinho);
  quadradinho.style.display = 'table-row';
  quadradinho.className = classVinculo;
}

function backGndColor() {
  const backGndColorSelected =
    document.getElementsByClassName('color selected')[0].style.backgroundColor;
  this.style.backgroundColor = backGndColorSelected;
}

function colunaTabela(tpTag2, nmClasse, classVinculo2, index1) {
  const quadradinho = document.createElement(tpTag2);
  document.getElementsByClassName(classVinculo2)[index1].appendChild(quadradinho);
  quadradinho.style.display = 'table-cell';
  quadradinho.className = nmClasse;
  if (quadradinho.className === 'pixel') {
    quadradinho.addEventListener('click', backGndColor);
  }
}

function selecionarCor() {
  if (document.getElementsByClassName('color selected')[0]) {
    document.getElementsByClassName('color selected')[0].classList.remove('selected');
  }
  this.classList.add('selected');
}

function coresEscolhas() {
  const arrayCores = ['black', 'yellow', 'red', 'green'];
  for (let i = 0; i < arrayCores.length; i += 1) {
    document.getElementsByClassName('color')[i].style.backgroundColor = arrayCores[i];
    document.getElementsByClassName('color')[i].addEventListener('click', selecionarCor);
  }
}

function botaoLimpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', botaoLimpar);

function criaPaletaDeEscolhas(i) {
  for (let index1 = 0; index1 < tabelaLinha[i]; index1 += 1) {
    linhaTabela(tipoTag[i], qualIdVincular[i], classeVinculo[i]);
    for (let index2 = 0; index2 < tabelaCelula[i]; index2 += 1) {
      colunaTabela(tipoTag2[i], nomeClasse[i], classeVinculo[i], index1);
    }
  }
}

for (let i = 0; i < 2; i += 1) {
  criaPaletaDeEscolhas(i);
}
coresEscolhas();
