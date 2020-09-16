let colorOptions = document.querySelectorAll('.color');

for (let index = 0; index < colorOptions.length; index += 1){
  colorOptions[index].addEventListener('click', function(event){
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  })
} // Abstração facilitada pela resolução em grupo feita por parte da turma.
