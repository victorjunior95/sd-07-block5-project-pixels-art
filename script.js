let paint = document.getElementsByClassName("selected")[0];
let background = window.getComputedStyle(paint).backgroundColor;
let selectedColor = document.getElementById("color-palette");
let paintPixel = document.getElementById("pixel-board");
let resetPixel = document.getElementById("clear-board")
let buttonVqv = document.getElementById("generate-board")
let sizeBoard = document.getElementById("board-size")

selectedColor.addEventListener("click", function (event) {
  console.log(paintPixel)
  if (
    event.target.classList.contains("selected") == false &&
    event.target.classList.contains("color") == true
  ) {
    paint.classList.remove("selected");
    event.target.className += " selected";
    paint = document.getElementsByClassName("selected")[0];
    background = window.getComputedStyle(paint).backgroundColor;
  }
});

paintPixel.addEventListener("click", function (event) {
  if (event.target.classList.contains("pixel") == true) {
    event.target.style.backgroundColor = background;
  }
});

resetPixel.addEventListener("click", function() {
  let reset = document.getElementsByClassName("pixel")
  for (let index = 0; index < reset.length; index += 1) {
    reset[index].style.backgroundColor = "white"
  }
})

buttonVqv.addEventListener("click", function() {
  // paintPixel.remove(this.children)
  // console.log(paintPixel)
  // paintPixel = document.createElement("table")
  // paintPixel.setAttribute("id", "pixel-board")
  // document.querySelector("section").appendChild(paintPixel)
  // paintPixel = document.getElementById("pixel-board");
  while (document.querySelector('#pixel-board').firstChild) {
    document.querySelector('#pixel-board').removeChild(document.querySelector('#pixel-board').firstChild);
  }
  for (let index = 0; index < sizeBoard.value; index += 1) {
    let createTable = document.createElement("tr")
    document.getElementById("pixel-board").appendChild(createTable)
    for (let indexPixel = 0; indexPixel < sizeBoard.value; indexPixel +=1) {
      let createPixel = document.createElement("td")
      createPixel.className = "pixel"
      createTable.appendChild(createPixel)
    }
  }
  // paintPixel = document.getElementById("pixel-board");
  console.log(paintPixel)
});
