function selectingColor(event) {
  if (event.target.className.match(/selected/g)) {
    return
  }
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

const colorPixelList = document.getElementsByClassName('color');
for (let i = 0; i < 4; i += 1) {
  colorPixelList[i].addEventListener('click', selectingColor);
}