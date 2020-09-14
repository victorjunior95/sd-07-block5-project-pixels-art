
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

let button = document.getElementById('clear-board');
button.addEventListener("click", function () {
  document.querySelectorAll(".pixel").forEach(allToWhite);
});

function allToWhite(item) {
  item.style.backgroundColor = "white";
};


