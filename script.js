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

let palete = document.querySelectorAll('#palete div');
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
    paletteColor[0].className = 'selected';
    paletteColor[1].className = 'color';
    paletteColor[2].className = 'color';
    paletteColor[3].className = 'color';
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[0].style.backgroundColor;
        });
    }
});

paletteColor[1].addEventListener('click', function () {
    paletteColor[1].className = 'selected';
    paletteColor[0].className = 'color';
    paletteColor[2].className = 'color';
    paletteColor[3].className = 'color';
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[1].style.backgroundColor;
        });
    }
});

paletteColor[2].addEventListener('click', function () {
    paletteColor[2].className = 'selected';
    paletteColor[1].className = 'color';
    paletteColor[0].className = 'color';
    paletteColor[3].className = 'color';
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[2].style.backgroundColor;
        });
    }
});

paletteColor[3].addEventListener('click', function () {
    paletteColor[3].className = 'selected';
    paletteColor[1].className = 'color';
    paletteColor[2].className = 'color';
    paletteColor[0].className = 'color';
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[3].style.backgroundColor;
        });
    }
});