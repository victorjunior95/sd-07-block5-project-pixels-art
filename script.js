let box1 = document.querySelectorAll('.color')[0];
let box2 = document.querySelectorAll('.color')[1]; 
let box3 = document.querySelectorAll('.color')[2];
let box4 = document.querySelectorAll('.color')[3];

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

// Select black when the page load
window.addEventListener('load', function () {
  box1.classList.add('selected');
  randomColors();
});