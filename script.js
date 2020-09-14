const colors = document.querySelectorAll('.color');
const grid = document.querySelectorAll('.pixel');
let colorSelected = document.querySelector('.selected');

colors.addEventListener('click', function (event) {
  if ( event.target) {
    grid.style.backgroundColor = colors;  
  }
}, false);