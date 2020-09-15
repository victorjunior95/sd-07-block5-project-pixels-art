let lineNumbers = 5;
const pixelBoard = document.getElementById('pixel-board');

let line = [];
let pixel = [];
let k = 0;

for (let index = 0; index < lineNumbers; index += 1) {
  line[index] = document.createElement('div');
  line[index].className = 'line';
  pixelBoard.appendChild(line[index]);

  for (let j = 0; j < lineNumbers; j += 1) {
    pixel[k] = document.createElement('div');
    pixel[k].className = 'pixel';
    line[index].appendChild(pixel[k]);
       k += 1;
  }
}

let colors = document.querySelectorAll('.color');

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', function() {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    colors[index].classList.add('selected');
    console.log(colors[index]);
    //  event.target.className += ' selected';
    //  event.target.classList.add('selected');
  });
}


// const grid = document.querySelectorAll('.pixel');
// let colorSelected = document.querySelector('.selected').style.backgroundColor;


// let corAtual = "black"
// function pintar(){ event.target.style.backgroundColor = corAtual}
// colors.addEventListener('click', function (event) {
//   if (event.target.className === 'selected') {
//   }
// }, false);
