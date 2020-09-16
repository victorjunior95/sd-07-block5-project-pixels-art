window.onload = function () {
  let colorPalet = document.querySelector('.selected');
  let selectedColor = document.getElementsByClassName('color');

  for (let index = 0; index < selectedColor.length; index += 1) {
    selectedColor[index].addEventListener('click', function (event) {
      colorPalet.classList.remove('selected');
      event.target.classList.add('selected');
      colorPalet = event.target;
    });
  }

  let pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    let pixelSelected = pixel[index];
    pixelSelected.addEventListener('click', function (event) {
      event.target.style.backgroundColor = getComputedStyle(colorPalet).backgroundColor;
    });
  }
  /* Consultei vários repo dos colegas, mas o que me ajudou a entender melhor, e usei de base foi do colega Lennon de Oliveira - Turma 7
    https://github.com/tryber/sd-07-block5-project-pixels-art/blob/lenodeoliveira-pixel-art/script.js */
  // source: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

  let buttonClearPixel = document.getElementById('clear-board');
  buttonClearPixel.addEventListener('click', function () {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });

}
