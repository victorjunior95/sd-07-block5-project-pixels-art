window.onload = function() {
    defineColorsBackground();
}

function getRandomColors() {
    return ((Math.floor(Math.random()*255) + 1) + ", " + (Math.floor(Math.random()*255) + 1) + ", " + (Math.floor(Math.random()*255) + 1));
}
function defineColorsBackground() {
    let buttons = document.querySelectorAll(".color");
    buttons[0].style.backgroundColor = "black";
    let helper = ["0, 0, 0"];
    for (let i = 1; i < buttons.length; i++) {
        helper[i] = getRandomColors();
        for (let j = 0; j < helper.length; j++) {
            if (helper[j] === helper[i]) {
                helper[i] = getRandomColors();
            }
        }
        buttons[i].style.backgroundColor = "rgb(" + getRandomColors() + ")";
    }
}