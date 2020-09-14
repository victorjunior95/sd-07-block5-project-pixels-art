//  DEFINIÇÕES
//  Selecionando paleta
const divColors = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
let selectedDiv = document.querySelector('.selected');

//  FUNCTIONS
//  Função responsável por remover classe 'selected' da cor selecionada no momento
function clearSelection() {
  selectedDiv.classList.remove('selected');
}

//  Função responsável por adicionar classe 'selected' ao elemento selecionado
function addSelection(target) {
  target.classList.add('selected');
  selectedDiv = document.querySelector('.selected');
}

//  Função Responsável por pegar a cor da div selecionada
function getColor(selectedDiv) {
  const property = window.getComputedStyle(selectedDiv, null).getPropertyValue('background-color');
  return property;
}

//  Função responsável por pintar pixel
function paint(target) {
  target.style.backgroundColor = selectedColor;
}

//  DEFINIÇÕES PÓS FUNÇÕES
let selectedColor = getColor(selectedDiv);

//  EVENTOS
//  Adicionando evento de clique nas cores da paleta
divColors.addEventListener('click', function (event) {
  clearSelection();
  addSelection(event.target);
  selectedColor = getColor(selectedDiv);
});

//  Adicionando evento de clique na pixel-board
board.addEventListener('click', function (event) {
  paint(event.target);
});
