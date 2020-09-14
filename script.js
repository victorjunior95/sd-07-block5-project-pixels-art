let colorPalette = document.querySelectorAll('.color')
let colors = ['black', 'red', 'green', 'blue']

for (let index = 0; index < colors.length; index += 1) {
  colorPalette[index].style.backgroundColor = colors[index]
}