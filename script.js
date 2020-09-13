document.body.appendChild(document.createElement('header'));
document.querySelector('header').appendChild(document.createElement('h1'))
document.querySelector('header h1').setAttribute('id', 'title');
document.querySelector('#title').innerText = 'Paleta de Cores';

document.body.appendChild(document.createElement('section'));
document.querySelector('section').setAttribute('id', 'sessao');
document.querySelector('#sessao').appendChild(document.createElement('table'));
document.querySelector('#sessao table').appendChild(document.createElement('tr'));
for (let index = 0; index < 4; index += 1) {
    document.querySelector('#sessao tr').appendChild(document.createElement('td'));
    document.querySelectorAll('#sessao td')[index].setAttribute('id', 'color-palette')
    document.querySelectorAll('#sessao td')[index].setAttribute('class', 'color')
}

const paletteColor = document.querySelectorAll('#color-palette');
const boardPixel = document.querySelectorAll('pixel-board');

paletteColor[0].style.backgroundColor = 'black';
paletteColor[1].style.backgroundColor = 'red';
paletteColor[2].style.backgroundColor = 'blue';
paletteColor[3].style.backgroundColor = 'green';

document.body.appendChild(document.createElement('button'));
document.querySelector('button').setAttribute('id', 'clear-board');
document.querySelector('#clear-board').setAttribute('class', 'botao');
document.querySelector('#clear-board').innerText = 'Limpar';

document.body.appendChild(document.createElement('section'));
document.querySelectorAll('section')[1].setAttribute('id', 'palete');
document.querySelector('#palete').setAttribute('class', 'pale');
document.querySelector('#palete').appendChild(document.createElement('table'));
document.querySelector('#palete table').appendChild(document.createElement('tr'));
for(let aux = 0; aux < 25; aux += 1) {
    document.querySelector('#palete tr').appendChild(document.createElement('td'));
    document.querySelectorAll('#palete td')[aux].setAttribute('id', 'pixel-board');
    document.querySelectorAll('#palete td')[aux].setAttribute('class', 'pixel');
}

const palete = document.querySelectorAll('#palete td');
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
    paletteColor[0].className = 'color';
    paletteColor[1].className = 'color';
    paletteColor[3].className = 'color';
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[2].style.backgroundColor;
        });
    }
});

paletteColor[3].addEventListener('click', function () {
    paletteColor[3].className = 'selected';
    paletteColor[0].className = 'color';
    paletteColor[2].className = 'color';
    paletteColor[1].className = 'color';
    for(let index = 0; index < 25; index += 1) {
        palete[index].addEventListener('click', function () {
            palete[index].style.backgroundColor = paletteColor[3].style.backgroundColor;
        });
    }
});

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', (event) => {
    paletteColor[0].className = 'color';
    paletteColor[1].className = 'color';
    paletteColor[2].className = 'color';
    paletteColor[3].className = 'color';
    for(let index = 0; index < 25; index += 1) {
        palete[index].style.backgroundColor = 'white';
    }
});