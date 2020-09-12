const pixels = document.querySelectorAll('.pixel');

document.querySelector('.button-clear').addEventListener('click', clearPixel);

function clearPixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', applyColor)
}

function applyColor (event) {
  let colorToApply = document.querySelector('.selected');
  cssObj = window.getComputedStyle(colorToApply, null);
  event.target.style.backgroundColor = cssObj.getPropertyValue("background-color");
}
