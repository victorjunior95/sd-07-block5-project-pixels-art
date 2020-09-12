let color = 'black';

const resetSelector = () => {
  document.querySelectorAll('.color').forEach((item) => {
    item.classList.remove('selected');
  });
};

const blackPicker = document.querySelector('.black');
blackPicker.addEventListener('click', function () {
  color = 'black';
  resetSelector();
  document.querySelector('.black').classList.add('selected');
});

const greenPicker = document.querySelector('.green');
greenPicker.addEventListener('click', function () {
  color = 'green';
  resetSelector();
  document.querySelector('.green').classList.add('selected');
});

const bluePicker = document.querySelector('.blue');
bluePicker.addEventListener('click', function () {
  color = 'blue';
  resetSelector();
  document.querySelector('.blue').classList.add('selected');
});

const redPicker = document.querySelector('.red');
redPicker.addEventListener('click', function () {
  color = 'red';
  resetSelector();
  document.querySelector('.red').classList.add('selected');
});

// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', () => {
    item.style.backgroundColor = color;
  });
});

const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', () => {
  for (
    let index = 0;
    index < document.querySelectorAll('.pixel').length;
    index += 1
  ) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
  }
});
