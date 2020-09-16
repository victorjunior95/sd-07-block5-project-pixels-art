let colorOptions = document.querySelectorAll('.color');
let pixels = document.querySelectorAll('.pixel');
let clearButton = document.querySelector('#clear-button');

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
  })
}
