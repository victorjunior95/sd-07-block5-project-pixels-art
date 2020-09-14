let selectBlackColor = document.querySelector('.selected');
selectBlackColor.addEventListener('click', function() {
  selectBlackColor.classList.add('.selected');
  colorRed.classList.remove('.selected');
  colorBlue.classList.remove('.selected');
  colorGreen.classList.remove('.selected');
});

let colorRed = document.querySelector('.red');
colorRed.addEventListener('click', function() {
  colorRed.classList.add('.selected');
  colorBlack.classList.remove('.selected');
  colorBlue.classList.remove('.selected');
  colorGreen.classList.remove('.selected');
});

let colorBlue = document.querySelector('.blue');
colorBlue.addEventListener('click', function() {
  colorBlue.classList.add('.selected');
  colorBlack.classList.remove('.selected');
  colorRed.classList.remove('.selected');
  colorGreen.classList.remove('.selected');
});

let colorGreen = document.querySelector('.green');
colorGreen.addEventListener('click', function() {
  colorGreen.classList.add('.selected');
  colorBlack.classList.remove('.selected');
  colorRed.classList.remove('.selected');
  colorBlue.classList.remove('.selected');
});
