window.onload = function() {
    defineColorsBackground();
    screen(5);
}

function getRandomColors() {
    return (Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256));
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

function screen(size) {
    let board = document.querySelector("#pixel-board")
    let area = size;

    for (let i = 0; i < size; i++) {
        let linha = document.createElement("div")
        linha.className = "linha";
        for (let j = 0; j < size; j++) {
            let coluna = document.createElement("div");
            coluna.className = "pixel coluna";
            coluna.style.padding = '40px';
            linha.appendChild(coluna);
        }
        board.appendChild(linha);
    }
}
// let selectedButton = document.querySelector(".selected");
// let buttons = document.querySelectorAll(".color");

// for (let i of buttons) {
//     i.addEventListener("click", function() {
//         i.classList.add("selected")
//         selectedButton.classList.remove("selected")
//     });
// }