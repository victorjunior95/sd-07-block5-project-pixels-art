const colors = document.querySelectorAll('.color');

window.onload = function () {
  colors[0].className += ' selected';
};

document.querySelector('.clear-board').addEventListener('click', function () {
  const clear = document.querySelectorAll('.pixel');
  for (let i = 0; i < clear.length; i += 1) {
    clear[i].style.backgroundColor = 'white';
  }

});
