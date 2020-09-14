const color = document.querySelectorAll('.color');
const clear = document.querySelector('#clear-board');
let pixel = document.querySelectorAll('.pixel');
let currentColor = 'black';

color[0].addEventListener('click', function () {
  color[0].className = 'color , first , selected';
  currentColor = 'black';
});

color[1].addEventListener('click', function () {
  color.className = 'color , second , selected';
  currentColor = 'red';
});

color[2].addEventListener('click', function () {
  color.className = 'color , third , selected';
  currentColor = 'green';
});

color[3].addEventListener('click', function () {
  color.className = 'color , last , selected';
  currentColor = 'blue';
});

pixel[0].addEventListener('click', function () {
  pixel[0].style.backgroundColor = currentColor;
});

pixel[1].addEventListener('click', function () {
  pixel[1].style.backgroundColor = currentColor;
});

pixel[2].addEventListener('click', function () {
  pixel[2].style.backgroundColor = currentColor;
});

pixel[3].addEventListener('click', function () {
  pixel[3].style.backgroundColor = currentColor;
});

pixel[4].addEventListener('click', function () {
  pixel[4].style.backgroundColor = currentColor;
});

pixel[5].addEventListener('click', function () {
  pixel[5].style.backgroundColor = currentColor;
});

pixel[6].addEventListener('click', function () {
  pixel[6].style.backgroundColor = currentColor;
});

pixel[7].addEventListener('click', function () {
  pixel[7].style.backgroundColor = currentColor;
});

pixel[8].addEventListener('click', function () {
  pixel[8].style.backgroundColor = currentColor;
});

pixel[9].addEventListener('click', function () {
  pixel[9].style.backgroundColor = currentColor;
});

pixel[10].addEventListener('click', function () {
  pixel[10].style.backgroundColor = currentColor;
});

pixel[11].addEventListener('click', function () {
  pixel[11].style.backgroundColor = currentColor;
});

pixel[12].addEventListener('click', function () {
  pixel[12].style.backgroundColor = currentColor;
});

pixel[13].addEventListener('click', function () {
  pixel[13].style.backgroundColor = currentColor;
});

pixel[14].addEventListener('click', function () {
  pixel[14].style.backgroundColor = currentColor;
});

pixel[15].addEventListener('click', function () {
  pixel[15].style.backgroundColor = currentColor;
});

pixel[16].addEventListener('click', function () {
  pixel[16].style.backgroundColor = currentColor;
});

pixel[17].addEventListener('click', function () {
  pixel[17].style.backgroundColor = currentColor;
});

pixel[18].addEventListener('click', function () {
  pixel[18].style.backgroundColor = currentColor;
});

pixel[19].addEventListener('click', function () {
  pixel[19].style.backgroundColor = currentColor;
});

pixel[20].addEventListener('click', function () {
  pixel[20].style.backgroundColor = currentColor;
});

pixel[21].addEventListener('click', function () {
  pixel[21].style.backgroundColor = currentColor;
});

pixel[22].addEventListener('click', function () {
  pixel[22].style.backgroundColor = currentColor;
});

pixel[23].addEventListener('click', function () {
  pixel[23].style.backgroundColor = currentColor;
});

pixel[24].addEventListener('click', function () {
  pixel[24].style.backgroundColor = currentColor;
});

clear.addEventListener('click', function () {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});