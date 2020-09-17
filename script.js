let color = "black"
const colorBlack = document.querySelector('#black');
const colorYellow = document.querySelector('#yellow');
const colorRed = document.querySelector('#red');
const colorBlue = document.querySelector('#blue');

colorBlack.addEventListener('click', function () {
    colorYellow.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorBlack.classList.add('selected');
    color = window.getComputedStyle(colorBlack).backgroundColor;
});

colorYellow.addEventListener('click', function () {
    colorBlack.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorYellow.classList.add('selected');
    color = window.getComputedStyle(colorYellow).backgroundColor;
});

colorRed.addEventListener('click', function () {
    colorBlack.classList.remove('selected');
    colorYellow.classList.remove('selected');
    colorBlue.classList.remove('selected');
    colorRed.classList.add('selected');
    color = window.getComputedStyle(colorRed).backgroundColor;
});

colorBlue.addEventListener('click', function () {
    colorBlack.classList.remove('selected');
    colorRed.classList.remove('selected');
    colorYellow.classList.remove('selected');
    colorBlue.classList.add('selected');
    color = window.getComputedStyle(colorBlue).backgroundColor;
});

function changeColor() {
    document.querySelectorAll('.pixel').forEach((item) => {
        item.addEventListener('click', function () {
            item.style.backgroundColor = color;
    })
  })
}
