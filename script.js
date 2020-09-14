let selectPixel = document.getElementsByClassName('pixel');

let colorSelected = document.querySelector('.selected');

for(let index = 0; index < selectPixel.length; index += 1) {
  selectPixel[index].addEventListener('click', function() {
    selectPixel[index].style.backgroundColor = colorSelected.style.backgroundColor;
  });
}

console.log(selectPixel);

// let selectColorPalette = document.querySelectorAll('.color');

// for(let counter = 0; counter < selectColorPalette.length; counter += 1) {

// }
