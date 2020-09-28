const colorBlack = document.getElementById('black');
colorBlack.style.backgroundColor = 'black';

const colorRed = document.getElementById('red');
colorRed.style.backgroundColor = 'red';

const colorBlue = document.getElementById('blue');
colorBlue.style.backgroundColor = 'blue';

const colorGreen = document.getElementById('green');
colorGreen.style.backgroundColor = 'green';

document.getElementById('color-palette').addEventListener('click', function(event) {
  let colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
      colors[i].classList.remove('selected');
  }
  let selectedColor = event.target;
  selectedColor.classList.add('selected');
})

document.getElementById('pixel-board').addEventListener('click', function (event) {
  let selectedPixel = event.target;
  let selectedColor = document.querySelector('.selected');
  selectedPixel.style.backgroundColor = selectedColor.style.backgroundColor; 
})

document.getElementById('clear-board').addEventListener('click', function() {
  let pixel = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    let pixelOnClick = pixel[i];
    pixelOnClick.style.backgroundColor = 'white';
  }
})