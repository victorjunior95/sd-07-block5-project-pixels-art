function selectingColor(event) {
  if (event.target.className.match(/selected/g)) {
    return
  }
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintingPixel(event) {
  if (event.target.classList.length > 1) {
      event.target.classList.remove(event.target.classList[1]);
  }
  const selectedColor = document.querySelector('.selected').classList[1];
  event.target.classList.add(selectedColor);
}

function clearColors() {
    const pixelList = document.getElementsByClassName('pixel');
    for (let i = 0; i < pixelList.length; i += 1) {
        pixelList[i].style.backgroundColor = 'white';
    }
}

const colorPixelList = document.getElementsByClassName('color');
for (let i = 0; i < 4; i += 1) {
  colorPixelList[i].addEventListener('click', selectingColor);
}
const pixelList = document.getElementsByClassName('pixel');
for (let i = 0; i < pixelList.length; i += 1) {
    pixelList[i].addEventListener('click', paintingPixel);
}
const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearColors);