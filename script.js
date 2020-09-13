let colorOne = document.getElementsByClassName('color')[0];
let colorTwo= document.getElementsByClassName('color')[1];
let colorThree = document.getElementsByClassName('color')[2];
let colorFour = document.getElementsByClassName('color')[3];
let selectedColor = document.getElementsByClassName('color selected')

let paletteSelection = document.getElementsByClassName('color')

let pixelSelection = document.getElementsByClassName('pixel')


for (let item = 0; item < paletteSelection.length; item += 1) {
  paletteSelection[item].addEventListener('click', selectColor)
}

for (let pixel = 0; pixel < pixelSelection.length; pixel += 1) {
  let pixelBox = pixelSelection[pixel]
  console.log(pixelBox)
  pixelBox.addEventListener('click', fillColor)
}

function selectColor(event) {
  selectedColor[0].className = 'color'
  event.target.className = 'color selected'
}

function fillColor(event) {
  let color = selectedColor[0].id
  event.target.style.backgroundColor = color
}
