window.onload = function () {

    let board = document.querySelectorAll(".pixel");
    let clearButton = document.querySelector("#clear-board");
    let setNumberTable = document.querySelector("#generate-board");
    let numberTable = document.querySelector("#board-size");
    let selectedColor = document.querySelector(".selected");
    let color1 = document.querySelector("#black");
    let color2 = document.querySelector("#orange");
    let color3 = document.querySelector("#pink");
    let color4 = document.querySelector("#blueviolet");

    /* Mudar a cor selecionada */
    color1.addEventListener("click", setSelectedColor);
    color2.addEventListener("click", setSelectedColor);
    color3.addEventListener("click", setSelectedColor);
    color4.addEventListener("click", setSelectedColor);

    function setSelectedColor() {
        let setColor = event.target;
        if (selectedColor !== setColor) {
            selectedColor.classList[2].remove("selected");
            setColor.classList[2].add("selected");
        }
    }

    /* Pintar quadro de pixels */
    selectPixel()
    function selectPixel () {
        for (index = 0; index < board.length; index += 1) {
            board[index].addEventListener('click', paintPixels);
        }
    }

    function paintPixels() {
        let setPixel = event.target;
        let paintColor = document.querySelector('.selected').classList[1];  
        setPixel.classList.add(paintColor);
        console.log(paintColor);
    }
}