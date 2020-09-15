window.onload = function () {

    let board = document.querySelectorAll(".pixel");
    let clearButton = document.querySelector("#clear-board");
    let setNumberTable = document.querySelector("#generate-board"); /* button */
    let numberTable = document.querySelector("#board-size"); /* input */
    let selectedColor = document.querySelector(".selected");
    let color1 = document.querySelector(".black");
    let color2 = document.querySelector(".orange");
    let color3 = document.querySelector(".pink");
    let color4 = document.querySelector(".blue");
    let father = documento.querySelectorAll(".line");
    console.log(father);

    /* Mudar a cor selecionada */
    color1.addEventListener("click", setSelectedColor);
    color2.addEventListener("click", setSelectedColor);
    color3.addEventListener("click", setSelectedColor);
    color4.addEventListener("click", setSelectedColor);

    function setSelectedColor() {
        let setColor = event.target;
        if (selectedColor !== setColor) {
            selectedColor.classList.remove("selected");
            setColor.classList.add("selected");
            selectedColor = document.querySelector(".selected");
        }
        return selectedColor;
    }

    /* Pintar quadro de pixels */
    selectPixel()
    function selectPixel () {
        for (index = 0; index < board.length; index += 1) {
            board[index].addEventListener("click", paintPixels);
        }
    }

    function paintPixels() {
        let setPixel = event.target;
        console.log(setPixel);
        paintColor = document.querySelector(".selected").classList[1];
        setPixel.classList.remove("black");
        setPixel.classList.remove("orange");
        setPixel.classList.remove("pink");
        setPixel.classList.remove("blue");
        setPixel.classList.add(paintColor);
        console.log(paintColor);
    }

    /* Limpando o quadro de pixels */
    clearButton.addEventListener("click", clearPixels);
    
    function clearPixels() {
        let numberOfPixels = board.length;
        for (index = 0; index < numberOfPixels; index += 1) {
            board[index].className = "pixel";
        }
    }

    /* Definindo tamanho do quadro de pixels pelo usuário */
    /* setNumberTable.addEventListener("click", setPixelBoardSize); */
 /*    setNumberTable.addEventListener("click", alertFunction);
    setNumberTable.addEventListener("click", creatingPixelsLine);
    
    function alertFunction() {
        let setNumberValue = numberTable.value;
        console.log(setNumberValue);
         if (setNumberValue < 1) {
            alert("Board inválido!");
        } else if (setNumberValue < 5) {
            numberTable.value = 5;
            alert("Número mínimo: 5!");
        } else if (setNumberValue > 50) {
            numberTable.value = 50;
            alert("Número máximo: 50!");
        }
    }

    function creatingPixelsLine () {
        let newNumber = numberTable.value - 5;
        for (index = 0; index <= newNumber; index += 1) {
            let createPixel = document.createElement("div");
            createPixel.setAttribute("class", "pixel");
            /* https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute */
            /* father[index].appendChild(createPixel);
        }
    } */
}