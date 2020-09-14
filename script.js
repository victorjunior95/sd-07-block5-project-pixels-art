let defaultColor = document.querySelector('.selected').style.backgroundColor;


const selectColor = document.querySelector('.color-palette');
selectColor.addEventListener('click', function (event) {
  const select = document.querySelector('.selected');
  defaultColor = event.target.style.backgroundColor;
});

const selectPixel = document.querySelector('.pixel-board');
selectPixel.addEventListener('click', function (event) {
  event.target.style.backgroundColor = defaultColor;
});

