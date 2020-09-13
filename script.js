// 1) Declare the variables:

let black = document.querySelectorAll('.color')[0];
let red = document.querySelectorAll('.color')[1];
let green = document.querySelectorAll('.color')[2];
let purple = document.querySelectorAll('.color')[3];
let pixel = document.querySelectorAll('.pixel')[0];
let pixelBoard = document.querySelector('.pixel-board');

// 2) Define the functions:

// To define the black color:
black.style.backgroundColor = 'black';
window.addEventListener('load', function () {
  red.style.backgroundColor = 'red';
  green.style.backgroundColor = 'green';
  purple.style.backgroundColor = 'purple';
})

// To select the black color:
function selectBlack() {
  let selected = document.querySelector('.selected')
  selected.classList.remove('selected');
  black.classList.add('selected');
}

// To select the red color:
function selectRed () {
  let selected = document.querySelector('.selected')
  selected.classList.remove('selected');
  red.classList.add('selected');
}

// To select the green color:
function selectGreen () {
  let selected = document.querySelector('.selected')
  selected.classList.remove('selected');
  green.classList.add('selected');
}

// To select the purple color:
function selectPurple () {
  let selected = document.querySelector('.selected')
  selected.classList.remove('selected');
  purple.classList.add('selected');
}

// To paint the blank squares:
pixelBoard.addEventListener('click', function(pixel) {
  pixel.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});