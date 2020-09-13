let selected = document.querySelector('.selected');
let randColors = document.querySelectorAll('.pick');
for (let i = 0; i < randColors.length; i += 1) {
  randColors[i].style.backgroundColor =
    'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) +')';
}

let colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', function () {
    selected.classList.remove('selected');
    colors[i].classList.add('selected');
    selected = colors[i];
  });
}

document.querySelector('#clear-board').addEventListener('click', function () {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

function attribute() {
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
    pixels[i].addEventListener('click', function () {
      pixels[i].style.backgroundColor = getComputedStyle(selected).backgroundColor;
    });
  }
}

function generateBoard(num){
  let board = document.createElement('div');
  for (let i = 0; i < num; i+=1) {
    let line = document.createElement('div')
    for (let j = 0; j < num; j++) {
      px = document.createElement('div');
      px.className = 'pixel'
      px.id = 'pixel'
      line.appendChild(px)
    }
    board.appendChild(line);
  }
  console.log(board)
  let pxb = document.querySelector('#pixel-board');
  pxb.innerHTML = '';
  pxb.appendChild(board)
  attribute();
}

document.querySelector('#generate-board').addEventListener('click',function(){
  generateBoard(document.querySelector('#board-size').value)
})
attribute();
generateBoard(5);