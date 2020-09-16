const select = document.querySelector('#color-palette');
const paint = document.querySelector('#pixel-board');
const clear = document.querySelector('#clear-board');
const changeSize = document.querySelector('#generate-board');

select.addEventListener('click', function () {
  if (event.target.id == 'green' ) {
    document.getElementById('black').className = 'color black';
    document.getElementById('blue').className = 'color blue';
    document.getElementById('yellow').className = 'color yellow';
    document.getElementById('green').className = 'color green selected';
  } else if (event.target.id == 'black') {
    document.getElementById('black').className = 'color black selected';
    document.getElementById('blue').className = 'color blue';
    document.getElementById('yellow').className = 'color yellow';
    document.getElementById('green').className = 'color green';
  } else if (event.target.id == 'blue') {
    document.getElementById('black').className = 'color black';
    document.getElementById('blue').className = 'color blue selected';
    document.getElementById('yellow').className = 'color yellow';
    document.getElementById('green').className = 'color green';
  } else if (event.target.id == 'yellow') {
    document.getElementById('black').className = 'color black';
    document.getElementById('blue').className = 'color blue';
    document.getElementById('yellow').className = 'color yellow selected';
    document.getElementById('green').className = 'color green';
  }
})

paint.addEventListener('click', function () {
  selectedColor = document.getElementsByClassName('selected')[0];
  selectedClass = selectedColor.className;
  array = selectedClass.split(' ');
  newClass = array[1];
  if (event.target.className.includes('pixel')) {
    event.target.className = `pixel ${newClass}`;
  }
});

clear.addEventListener('click', function () {
  let boardLength = document.querySelectorAll('#pixel-board .pixel').length;
  for (index = 0; index < boardLength; index += 1) {
    document.getElementsByClassName('pixel')[index].className = 'pixel';
  }
})


changeSize.addEventListener('click', function () {
  textSize = document.querySelector('#board-size').value;
  if (textSize == '') {
    alert('Board inválido!')
  }

  
  
  
});

