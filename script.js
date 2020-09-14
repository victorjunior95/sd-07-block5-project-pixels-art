
for (let i = 0; i < 4; i += 1) {
  let colorPalette = document.getElementById('color-palette');
  let colorDiv = document.createElement('div');
  
  colorPalette.appendChild(colorDiv);

  let arrayOfColors = ['black', 'salmon', 'green', 'blue'];
  for (let j = 0; j < arrayOfColors.length; j += 1) {
    if (i === j) {
        colorDiv.className = `color ${arrayOfColors[j]}`;
    }
  }
}
