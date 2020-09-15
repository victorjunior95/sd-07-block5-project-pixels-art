// https://github.com/tryber/sd-07-block5-project-pixels-art/tree/Cainan6697-project-pixels-art
let defaultColor = 'black';

const selectColor = document.querySelector('.color-palette');
selectColor.addEventListener('click', function (event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.className += ' selected';
  defaultColor = event.target.style.backgroundColor;
});

const selectPixel = document.querySelector('.pixel-board');
selectPixel.addEventListener('click', function (event) {
  event.target.style.backgroundColor = defaultColor;
});



function buttonClear() {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
