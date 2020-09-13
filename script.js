// 1) Declare the variables:

let black = document.getElementsByClassName('color')[0];
let red = document.getElementsByClassName('color')[1];
let green = document.getElementsByClassName('color')[2];
let purple = document.getElementsByClassName('color')[3];
let pixel = document.querySelectorAll('.pixel')[0];
let pixelBoard = document.querySelector('.pixel-board');
let selected = document.querySelector('.selected')

// 2) Define the functions:

// To select the black color:
function selectBlack (selected) {
  selected.classList.remove('selected');
  black.classList.add('selected');
}

// To select the red color:
function selectRed (selected) {
  selected.classList.remove('selected');
  red.classList.add('selected');
}

// To select the green color:
function selectGreen (selected) {
  selected.classList.remove('selected');
  green.classList.add('selected');
}

// To select the purple color:
function selectPurple (selected) {
  selected.classList.remove('selected');
  purple.classList.add('selected');
}

// To set a color:
function setColor () {
  if (black) {
    selectBlack;
  }
  else if (red) {
    selectRed;
  }
  else if (green) {
    selectGreen;
  }
  else if (purple) {
    selectPurple;
  }
  else {
    console.log("Error! Please choose a valid color");
  }
}

// To click on the color squares:
document.querySelectorAll('.color').forEach(square => {
  square.addEventListener('click', event => {
    setColor (square);  
  })
})
