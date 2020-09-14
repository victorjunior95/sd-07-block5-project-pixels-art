//  Selecionando paleta
const divColors = document.querySelector('#color-palette');
const colors = document.querySelectorAll('.color');
let selectedDiv = document.querySelector('.selected');
let selectedColor = getColor(selectedDiv);

//  Adicionando evento de clique nas cores da paleta
divColors.addEventListener('click', function (event) {
  clearSelection();
  addSelection(event.target);
  selectedColor = getColor(selectedDiv);
});

//  FUNCTIONS
//  Função responsável por remover classe 'selected' da cor selecionada no momento
function clearSelection () {
  selectedDiv.classList.remove('selected');
};

//Função responsável por adicionar classe 'selected' ao elemento selecionado
function addSelection (target) {
  console.log(target);
  target.classList.add('selected');
  selectedDiv = document.querySelector('.selected');
};

//Função Responsável por pegar a cor da div selecionada
function getColor (selectedDiv) {
  let property = window.getComputedStyle(selectedDiv, null).getPropertyValue('background-color');
  return property;
};
