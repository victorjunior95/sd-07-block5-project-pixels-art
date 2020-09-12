// Solução do 'Using a loop' -> https://bit.ly/2FsVtoc
const colorPalette = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('button');
let selectedColor = '';

pixel.forEach((item) => {
  item.addEventListener('click', () => {
    if (selectedColor === '') {
      item.style.backgroundColor = 'black';
    } else {
      item.style.backgroundColor = selectedColor;
    }
  });
});

colorPalette.forEach((color) => {
  color.addEventListener('click', () => {
    const plusClass = document.getElementsByClassName('color selected');

    if (plusClass[0] !== undefined) {
      plusClass[0].className = plusClass[0].className.replace(' selected', '');
    }
    selectedColor = getComputedStyle(color).backgroundColor;
    color.className += ' selected';
  });
});

clearBoard.addEventListener('click', () => {
  pixel.forEach((item) => {
    item.style.backgroundColor = 'white';
  });
});
