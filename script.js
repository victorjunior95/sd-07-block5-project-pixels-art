let selectedColor = document.getElementById('first-color');
document.querySelectorAll('.color').forEach(configureColorPaletteItemsAsClickable);

function removeClass(item) {
    item.classList.remove('selected');
}

function configureColorPaletteItemsAsClickable(item) {
    item.addEventListener("click", function () {
        document.querySelectorAll('.color').forEach(removeClass);
        item.classList.add('selected');
        selectedColor = item;
    });
}

document.querySelectorAll('.pixel').forEach(changePixelColor);

function changePixelColor(item) {
    item.addEventListener("click", function () {
        let color = window.getComputedStyle(selectedColor, null).getPropertyValue("background-color");
        item.style.backgroundColor = color;
    });
}

let button = document.getElementById('clear-board');
button.addEventListener("click", function () {
    document.querySelectorAll(".pixel").forEach(changeBackgroundColorToWhite);
});

function changeBackgroundColorToWhite(item) {
    item.style.backgroundColor = "white";
}
