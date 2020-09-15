let pixelBoard = document.getElementById('pixel-board');
let boardSize = 5 // document.getElementById("board-size").value;

let boardLines = boardSize;
let divLines = [];
let pixel = [];
for (let i = 0; i < boardSize; i += 1) {
  divLines[i] = document.createElement("div");
  divLines[i].className = "boardLines"
  pixelBoard.appendChild(divLines[i]);

  for (let  j = 0; j < boardSize; j += 1) {
    pixel[i * boardSize + j] = document.createElement("div");
    pixel[i * boardSize + j].className = "pixel"
    divLines[i].appendChild(pixel[i * boardSize + j]);
  }
}

let colorSelected = document.getElementsByClassName("color");

for (let i = 0; i < 4; i += 1) {
  colorSelected[i].addEventListener("click", function() {
    document.querySelector(".selected").classList.remove("selected");
    colorSelected[i].classList.add("selected")
  });
}


for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener("click", function() {
    let cor = document.querySelector(".selected");
    let selected = document.querySelectorAll(".selected")
    pixel[i].style.backgroundColor = getComputedStyle(cor).backgroundColor;
    console.log(getComputedStyle(cor).backgroundColor)
  })

  let buttonClear= document.getElementById("clear-board");

  buttonClear.addEventListener("click", function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = "white"
    }
  })
}
