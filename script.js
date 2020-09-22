let colorOptions = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
let clearButton = document.querySelector('#clear-board');

for (let index = 0; index < colorOptions.length; index += 1){
  colorOptions[index].addEventListener('click', function(event){
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
} // Abstração facilitada pela resolução em grupo feita por parte da turma.
  
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', function (){
    let classSelected = document.querySelector('.selected');
    pixels[index].style.backgroundColor = window.getComputedStyle(classSelected).backgroundColor
  });
}

clearButton.addEventListener('click', function(){
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

//requisitos bônus #VQV

let boardSize = document.querySelector('#board-size');
let vqvBtn = document.querySelector('#generate-board');

vqvBtn.addEventListener('click', function () {
  if (boardSize.value < 5) {
    boardSize.value == 5;
  } else if (boardSize.value > 50) {
    boardSize.value == 50;
  }
  if (boardSize.value === '') {
    alert('Board inválido!');
  }
});
