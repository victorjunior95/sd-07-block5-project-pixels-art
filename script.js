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
  
for(let index = 0; index < paletteColor.length; index += 1) {
    const colors = ['black', 'red', 'blue', 'green'];
    paletteColor[index].style.backgroundColor = colors[index];
}

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

const boardPixel = document.querySelectorAll('#palete td');
window.onload = initial;
function initial() {
    paletteColor[0].className = 'selected';
    for(let index = 0; index < boardPixel.length; index += 1) {
        boardPixel[index].addEventListener('click', function () {
            boardPixel[index].style.backgroundColor = paletteColor[0].style.backgroundColor;
        });
    }
}
for (let aux = 0; aux < paletteColor.length; aux += 1) {
   paletteColor[aux].addEventListener('click', function () {
       paletteColor[aux].className = 'selected';
   if (paletteColor[aux].className === 'selected'){
     for(let index = 0; index < boardPixel.length; index += 1) {
      boardPixel[index].addEventListener('click', function () {
        boardPixel[index].style.backgroundColor = paletteColor[aux].style.backgroundColor;               
      });        
     }    
   }
 });
}

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', (event) => {
    for(let index = 0; index < boardPixel.length; index += 1) {
        boardPixel[index].style.backgroundColor = 'white';
    }
});