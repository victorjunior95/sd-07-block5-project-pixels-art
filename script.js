const pixelBoard = document.querySelector("#pixel-board");

let numberLines = 5;
let numberElements = 5;

// FUNCTION TO CREATE DIVS WITH CLASS "LINE"
function createLine() {
  for (let i = 0; i < numberLines; i += 1) {
  const line = document.createElement("div");
  line.classList.add('line');
  pixelBoard.appendChild(line);
  }
}
createLine();

// LOOP TO EXECUTE IN ALL LINES THE FUNCTION FILL LINE
for (let i = 0; i < numberLines; i += 1) {
  const line = document.querySelectorAll(".line");
  fillLine(line[i]);
}

// FUNCTION TO CREATE MY ELEMENTS PIXEL
function createElement(className) {
  const elementPixel = document.createElement("div");
  elementPixel.className = className;
  return elementPixel;
}

// FUNCTION TO INPUT THE ELEMENTS PIXEL IN THE LINE
function fillLine(divLine) {
  for (let i = 0; i < numberElements; i += 1) {
    const elementPixel = createElement("pixel");
    divLine.appendChild(elementPixel);
  }
}
