
let selectedColor = document.getElementById('black-index');
document.querySelectorAll('.color').forEach(clickConfigure);

function changeClass(item) {
    item.classList.remove('selected');
}

function clickConfigure(item) {
    item.addEventListener("click", function () {
        document.querySelectorAll('.color').forEach(changeClass);
        item.classList.add('selected');
        selectedColor = item;
    });
}

let pixel = document.querySelectorAll('.pixel');

document.getElementById('clear-board').addEventListener('click', function () {
  for (index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = "white";
  }
})

