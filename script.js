let columns = 5;
let lines = document.querySelectorAll(".line");

// Cria pixels brancos
function createPixel() {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    return pixel;
}

// Preenche uma linha com 5 pixels dado a localização da line(divLine).
function fillLine(divLine) {
    for (let index = 0; index < columns; index += 1) {
        let pixel = createPixel();
        divLine.appendChild(pixel);
    }
}

// Usando a função fillLines preenche os 25 pixels.
function fillAll(arrayLines) {
    for (let index = 0; index < arrayLines.length; index += 1) {
        fillLine(arrayLines[index]);
    }
}

fillAll(lines);

// 6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
document.querySelector('.color.black').className = 'color black selected';

// 7 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
let arrayPalete = document.querySelectorAll('.color');
for (index = 0; index < arrayPalete.length; index += 1) {
    let palete = arrayPalete[index];
    palete.addEventListener('click', function () {
        let selectedClass = document.querySelector('.selected');
        selectedClass.classList.remove('selected');
        palete.classList.add('selected');
    });
}