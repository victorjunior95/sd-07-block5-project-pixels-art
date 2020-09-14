const colors = document.querySelectorAll('.color');

for (let i = 0; i < 4; i += 1) {
  colors[i].addEventListener('click', function () {
    if (i === 0) {
      colors[0].className += ' selected';
      colors[1].className = 'color red';
      colors[2].className = 'color blue';
      colors[3].className = 'color green';
    } else if (i === 1) {
      colors[0].className = 'color black';
      colors[1].className += ' selected';
      colors[1].style.backgroundColor = 'red';
      colors[2].className = 'color blue';
      colors[3].className = 'color green';
    } else if (i === 2) {
      colors[0].className = 'color black';
      colors[1].className = 'color red';
      colors[2].className += ' selected';
      colors[2].style.backgroundColor = 'blue';
      colors[3].className = 'color green';
    } else if (i === 3) {
      colors[0].className = 'color black';
      colors[1].className = 'color red';
      colors[2].className = 'color blue';
      colors[3].className += ' selected';
      colors[3].style.backgroundColor = 'green';
    }
  });
}

const tableData = document.querySelectorAll('.pixel');

for (let i = 0; i < tableData.length; i += 1) {
  tableData[i].addEventListener('click', function () {
    tableData[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
  document.querySelector('#clear-board').addEventListener('click', function () {
    tableData[i].style.backgroundColor = 'white';
  });
}

document.querySelector('#generate-board').addEventListener('click', function () {
  const userInput = document.querySelector('#board-size');
  if (userInput.value === "") {
    alert('Board inválido!')
  }
})