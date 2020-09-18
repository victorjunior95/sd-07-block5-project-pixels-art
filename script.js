let box1 = document.querySelectorAll('.color')[0];
let box2 = document.querySelectorAll('.color')[1]; 
let box3 = document.querySelectorAll('.color')[2];
let box4 = document.querySelectorAll('.color')[3];
const pixelBoard = document.getElementById('pixel-board');

box1.style.backgroundColor = 'black';

function randomColor () {
  n = Math.round(Math.random() * 256);
  return n;
}

function randomColors () {
  const cor2 = 'rgb(' + randomColor() + ', ' + randomColor() + ', ' + randomColor() + ')';
  const cor3 = 'rgb(' + randomColor() + ', ' + randomColor() + ', ' + randomColor() + ')';
  const cor4 = 'rgb(' + randomColor() + ', ' + randomColor() + ', ' + randomColor() + ')';

  box2.style.backgroundColor = cor2;
  box3.style.backgroundColor = cor3;
  box4.style.backgroundColor = cor4;
}



for (let linha = 0; linha < 5; linha += 1) {
  // criar 1 linha
  let elementLine = document.createElement('div');
  elementLine.className = 'line';
  document.getElementById('pixel-board').appendChild(elementLine);
    for (let cell = 0; cell < 5; cell += 1) {
      let elementCell = document.createElement('div');
      elementCell.className = 'pixel';
      elementLine.appendChild(elementCell);
    }
}


// Select black when the page load
window.addEventListener('load', function () {
  box1.classList.add('selected');
  randomColors();
})

let color = document.querySelectorAll('.color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', function () {
    let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      // event.target.className += ' selected';
      color[i].classList.add('selected');
})
    
}
