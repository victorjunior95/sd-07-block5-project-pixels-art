let color = 'black';

// https://stackoverflow.com/a/25873123
function randomHsl() {
  return 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';
}
// <------------------------------------------------------->

let buttonColor1 = randomHsl();
let buttonColor2 = randomHsl();
let buttonColor3 = randomHsl();

document.querySelector('.button1').style.backgroundColor = buttonColor1;
document.querySelector('.button2').style.backgroundColor = buttonColor2;
document.querySelector('.button3').style.backgroundColor = buttonColor3;

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

const greenPicker = document.querySelector('.button1');
greenPicker.addEventListener('click', function () {
  color = buttonColor1;
  resetSelector();
  document.querySelector('.button1').classList.add('selected');
});

const bluePicker = document.querySelector('.button2');
bluePicker.addEventListener('click', function () {
  color = buttonColor2;
  resetSelector();
  document.querySelector('.button2').classList.add('selected');
});

const redPicker = document.querySelector('.button3');
redPicker.addEventListener('click', function () {
  color = buttonColor3;
  resetSelector();
  document.querySelector('.button3').classList.add('selected');
});

// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
document.querySelectorAll('.pixel').forEach((item) => {
  item.addEventListener('click', () => {
    item.style.backgroundColor = color;
  });
});
// <-------------------------------------------------------------------------------->

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
