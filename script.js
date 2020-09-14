// MY VARIABLES AND CONSTANTS
const pixelBoard = document.querySelector("#pixel-board");
const inputSizeBoard = document.querySelector("#inputSize");
const buttonSizeBoard = document.querySelector("#buttonInput");
// console.log(inputSizeBoard);
let numberLines = 5;
let numberElements = 5;

buttonSizeBoard.addEventListener("click", function () {
  numberElements = inputSizeBoard.value;
  numberLines = inputSizeBoard.value;
  // console.log(numberElements);
  // console.log(numberLines);
  executeAll();
});

function executeAll () {
  clearBoard();
  createLine();
  createPixels();
}

function clearBoard () {
  pixelBoard.innerHTML = "";
}

// FUNCTION TO CREATE DIVS WITH CLASS "LINE"
function createLine() {
  for (let i = 0; i < numberLines; i += 1) {
    const line = document.createElement("div");
    line.classList.add("line");
    pixelBoard.appendChild(line);
  }
}
createLine();

// LOOP TO EXECUTE IN ALL LINES THE FUNCTION FILL LINE
function createPixels() {
  for (let i = 0; i < numberLines; i += 1) {
    const line = document.querySelectorAll(".line");
    fillLine(line[i]);
  }
}
createPixels();

// FUNCTION TO CREATE MY PIXEL ELEMENTS AND THE CLASSES
function createElement(classList) {
  const elementPixel = document.createElement("div");
  elementPixel.classList = classList;
  return elementPixel;
}

// FUNCTION TO INPUT THE PIXEL ELEMENTS IN THE LINE
function fillLine(divLine) {
  for (let i = 0; i < numberElements; i += 1) {
    const elementPixel = createElement("pixel");
    divLine.appendChild(elementPixel);
  }
}

const myPixels = document.querySelectorAll(".pixel");
const colorSelected = document.querySelectorAll(".color");

// VARIABLE TO STORE MY INITIAL COLOR
function innicialColor (color) {
let getColor = color;
}
innicialColor("black");

// LOOP TO UPDATE MY LET GET COLOR
for (let i = 0; i < colorSelected.length; i += 1) {
  colorSelected[i].addEventListener("click", function (event) {
    let divs = event.target;
    getColor = divs.classList[1];
  });
}

// LOOP TO ADD AND REMOVE NEW CLASS "SELECTED"
for (let i = 0; i < colorSelected.length; i += 1) {
  colorSelected[i].addEventListener("click", function (event) {
    let divs = event.target;
    let checkClassName = document.querySelector(".selected");
    // If the class selected existed, it will be removed
    if (checkClassName) {
      checkClassName.classList.remove("selected");
    }
    // When the div be clicked, the class selected will be created in the div;
    divs.classList.add("selected");
    // console.log(document.querySelectorAll(".selected"));
  });
}

// LOOP TO SELECTED MY PIXEL ELEMENT AND CHANGE HIS BACKGROUND COLOR
for (let i = 0; i < myPixels.length; i += 1) {
  myPixels[i].addEventListener("click", function (event) {
    const onePixel = event.target;
    onePixel.style.backgroundColor = getColor;
  });
}

const buttonClear = document.querySelector("#clear-board");

buttonClear.addEventListener("click", function () {
  for (let i = 0; i < myPixels.length; i += 1) {
    myPixels[i].style.backgroundColor = "white";
  }
});

// TESTE PARA getPropertyValue()
// let colorBlue = document.querySelector(".blue");
// console.log(colorBlue.style.getPropertyValue("background-color"));
