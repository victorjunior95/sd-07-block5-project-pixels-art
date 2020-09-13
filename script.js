// Define color-pallete variables
let colorOne = document.getElementsByClassName('color')[0];
let colorTwo= document.getElementsByClassName('color')[1];
let colorThree = document.getElementsByClassName('color')[2];
let colorFour = document.getElementsByClassName('color')[3];
let clearButton = document.getElementById('clear-board')

// Define selected color with color selected class
let selectedColor = document.getElementsByClassName('color selected');

// Array of all elements with class color
let paletteSelection = document.getElementsByClassName('color');

// Array of all elements in the pixel board
let pixelSelection = document.getElementsByClassName('pixel');

// Loop to AddEventListener to all elements in color palette
for (let item = 0; item < paletteSelection.length; item += 1) {
  paletteSelection[item].addEventListener('click', selectColor);
}
// Loop to AddEventListener to all elements in the pixel board
for (let pixel = 0; pixel < pixelSelection.length; pixel += 1) {
  let pixelBox = pixelSelection[pixel];
  pixelBox.addEventListener('click', fillColor);
}

clearButton.addEventListener('click', function () {
  for (let box = 0; box < pixelSelection.length; box += 1) {
    pixelSelection[box].style.backgroundColor = 'white'
  }
})

// Function that pick a color (chosen element is tagged with a color selected class while previous selected color is changed to a color class name)
function selectColor(event) {
  selectedColor[0].className = 'color';
  event.target.className = 'color selected';
}

// function that fills a pixel and changes its background color to the selected one.
function fillColor(event) {
  let color = selectedColor[0].id;
  event.target.style.backgroundColor = color;
}
