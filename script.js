const color = document.querySelectorAll('.color');
color[0].classList.add('selected');


const colorPalette = document.querySelector('.color-palette');
colorPalette.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected');
  
  if (!event.target.classList.contains('selected')) {
    selectedColor.classList.toggle('selected');
    event.target.classList.toggle('selected');
  }
});

const pixelBoard = document.querySelector('#pixel-board');

const pixels = document.querySelectorAll('.pixel');
pixels.forEach((eachPixel) => {
  eachPixel.addEventListener("click", () => {
    const selectedColor = window
      .getComputedStyle(document.querySelector(".selected"))
      .getPropertyValue("background-color");
    eachPixel.style.backgroundColor = selectedColor;
  });
});