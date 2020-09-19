

// função para colorir pixels de acordo com a cor da paleta escolhida

let selectPixel = document.querySelectorAll('.pixel');

function changeColor(event) {
  let colorSelected = document.querySelector('.selected');

   event.target.className= "pixel td " +  colorSelected.classList[1];
}

for(let index = 0; index < selectPixel.length; index += 1) {
  selectPixel[index].addEventListener('click', changeColor);
}

// função para alterar a cor da paleta selecionada

let getColor = document.querySelectorAll('.color');

function changeSelected(event){
  let colorSelected = document.querySelector('.selected');

  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for(let count = 0; count < getColor.length; count += 1) {
  getColor[count].addEventListener('click', changeSelected)
}

//função para deixar os pixels com fundo branco de novo

let clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', function (){
  for(let list = 0; list < selectPixel.length; list += 1){
    let selectPixel = document.querySelectorAll('.pixel');
    selectPixel[list].className = 'pixel td';
  }
})


