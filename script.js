window.onload
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
    const currentColor = pixelList[i].classList[1];
    pixelList[i].classList.remove(currentColor);
    pixelList[i].classList.add('white');
  }
}

function generateGrid() {
  const gridSize = document.getElementById('board-size').value;
  if (gridSize > 0) {  const grid = document.getElementById('pixel-board');
    document.body.removeChild(grid);
    let newDivGrid = document.createElement('div');
    newDivGrid.className = 'new-grid';
    document.body.appendChild(newDivGrid);
    for (let i = 0; i < gridSize; i += 1) {
        const rowDiv = document.createElement('div');
        newDivGrid.appendChild(rowDiv);
        rowDiv.className = 'div-row';
        for (let i = 0; i < gridSize; i += 1) {
            const newPixel = document.createElement('div');
            newPixel.className = 'pixel';
            newPixel.classList.add('white');
            rowDiv.appendChild(newPixel);
        }
    }

    newDivGrid.style.columnFill = "balance";
  } else {
      alert('Board inválido!');
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
const generateGridButton = document.getElementById('generate-board');
generateGridButton.addEventListener('click', generateGrid);
