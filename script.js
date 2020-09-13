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
