let pixelBoard = document.querySelector('#pixel-board');

let paletaCores = document.getElementsByClassName('color');

for (let index = 0; index < paletaCores.length; index += 1) {
    console.log("entrei no for");
    paletaCores[index].addEventListener("click", function() {selecionaCor(paletaCores[index]);});
}

for (let index = 1; index < 26; index += 1) {
    let myPixel = document.createElement('DIV');
    myPixel.className = "pixel";
    pixelBoard.appendChild(myPixel);
    if (index % 5 === 0) {
        pixelBoard.appendChild(document.createElement('BR'));
    }
}

document.querySelector('.black').className = "color black selected";

function selecionaCor(cor){
    for (let index = 0; index < paletaCores.length; index += 1) {
        console.log("entrei no for do selecionaCor");
        if(paletaCores[index].classList.contains('selected')) {
            console.log("removi um selected");
            paletaCores[index].classList.remove('selected');
        }
    }
    cor.classList.add('selected');
}