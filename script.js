const colors = document.querySelectorAll('.color');

window.onload = function () {
  colors[0].className += ' selected';
};

document.querySelector('#clear-board').addEventListener('click', function () {
  const tableData = document.querySelectorAll('.pixel');
  for (let i = 0; i < tableData.length; i += 1) {
    tableData[i].style.backgroundColor = 'white';
  }
});
