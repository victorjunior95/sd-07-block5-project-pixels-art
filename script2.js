function rndRGB() {
  return (Math.floor(parseInt(Math.random() * 255)));
}

function randRGB() {
  return (`rgb(${rndRGB()} , ${rndRGB()} , ${rndRGB()})`);
}

function pixelGenerator() {
  pixelBoard.innerHTML = ''
  for (let i = 0; i < boardSize.value; i += 1) {
    divLines[i] = document.createElement("div");
    divLines[i].className = "boardLines"

    pixelBoard.appendChild(divLines[i]);

    for (let  j = 0; j < boardSize.value; j += 1) {
      pixel[i * boardSize.value + j] = document.createElement("div");
      pixel[i * boardSize.value + j].className = "pixel"
      divLines[i].appendChild(pixel[i * boardSize.value + j]);
    }
  }
}

let pixelBoard = document.getElementById('pixel-board');
let boardSize = document.getElementById("board-size");

let boardLines = boardSize.value;
let divLines = [];
let pixel = [];

pixelGenerator();
// for (let i = 0; i < boardSize.value; i += 1) {
//   divLines[i] = document.createElement("div");
//   divLines[i].className = "boardLines"
//   pixelBoard.appendChild(divLines[i]);

//   for (let  j = 0; j < boardSize.value; j += 1) {
//     pixel[i * boardSize.value + j] = document.createElement("div");
//     pixel[i * boardSize.value + j].className = "pixel"
//     divLines[i].appendChild(pixel[i * boardSize.value + j]);
//   }
// }

let colorSelected = document.getElementsByClassName("color");
colorSelected[1].style.backgroundColor = randRGB();
colorSelected[2].style.backgroundColor = randRGB();
colorSelected[3].style.backgroundColor = randRGB();

for (let i = 0; i < 4; i += 1) {
  colorSelected[i].addEventListener("click", function() {
    document.querySelector(".selected").classList.remove("selected");
    colorSelected[i].classList.add("selected")

    let fontColor = document.getElementsByClassName('colorFont');
    fontColor[0].style.backgroundColor = window.getComputedStyle(colorSelected[i]).backgroundColor;
  });
}

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener("click", function() {
    let cor = document.querySelector(".selected");
    let selected = document.querySelectorAll(".selected")
    pixel[i].style.backgroundColor = getComputedStyle(cor).backgroundColor;
  })

  let buttonClear= document.getElementById("clear-board");

  buttonClear.addEventListener("click", function () {
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = "white"
    }
  });
}

boardSize.addEventListener("blur", function() {
  if (boardSize.value == '') {
    alert('Board inválido!');
  }
  else {
    if (parseInt(boardSize.value) < parseInt(boardSize.min)) {
      boardSize.value = boardSize.min;
    }
    if (parseInt(boardSize.value) > parseInt(boardSize.max)) {
      boardSize.value = boardSize.max;
    }
  }
});

let buttonGenerator = document.getElementById('generate-board');
buttonGenerator.addEventListener('click', function() {
  pixelGenerator();
})
