const paletteColor = document.querySelectorAll('#color-palette');
const boardPixel = document.querySelectorAll('pixel-board');

paletteColor[0].style.backgroundColor = 'black';
paletteColor[1].style.backgroundColor = 'red';
paletteColor[2].style.backgroundColor = 'blue';
paletteColor[3].style.backgroundColor = 'green';


for(let aux = 0; aux < 25; aux += 1) {
    document.querySelector('#palete').appendChild(document.createElement('div'));
    document.querySelectorAll('#palete div')[aux].setAttribute('id', 'pixel-board');
    document.querySelectorAll('#palete div')[aux].setAttribute('class', 'pixel');
}

const palete = document.querySelectorAll('#palete div');
window.onload = initial;
function initial() {
    paletteColor[0].className = 'selected';
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[0].style.backgroundColor;
        });
    }
}

paletteColor[0].addEventListener('click', function () {
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[0].style.backgroundColor;
        });
    }
});

paletteColor[1].addEventListener('click', function () {
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[1].style.backgroundColor;
        });
    }
});

paletteColor[2].addEventListener('click', function () {
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[2].style.backgroundColor;
        });
    }
});

paletteColor[3].addEventListener('click', function () {
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[3].style.backgroundColor;
        });
    }
});

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', (event) => {
    for(let index = 0; index < 25; index += 1) {
        palete[index].style.backgroundColor = 'white';
    }
});