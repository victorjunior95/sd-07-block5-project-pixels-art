let palette = document.querySelector("#color-palette");
const numberColors = 4;

function loadColor(number) {
  switch (number) {
    case 1:
      colorBox.style.bacgroundColor = "black";
      break;
    case 2:
      colorBox.style.bacgroundColor = "red";
      break;
    case 3:
      colorBox.style.bacgroundColor = "green";
      break;
    case 4:
      colorBox.style.bacgroundColor = "blue";
      break;
  }
}


colorsPalette(numberColors);