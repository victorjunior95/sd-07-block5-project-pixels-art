document.body.appendChild(document.createElement('header'));
document.querySelector('header').appendChild(document.createElement('h1'))
document.querySelector('header h1').setAttribute('id', 'title');
document.querySelector('#title').innerText = 'Paleta de Cores';

document.body.appendChild(document.createElement('section'));
document.querySelector('section').setAttribute('id', 'sessao');
document.querySelector('#sessao').appendChild(document.createElement('table'));
document.querySelector('#sessao table').appendChild(document.createElement('tr'));
document.querySelector('#sessao tr').appendChild(document.createElement('td'));
for (let index = 0; index < 5; index += 1) {
    document.querySelector('#sessao tr').appendChild(document.createElement('td'));
    document.querySelectorAll('#sessao td')[index].setAttribute('id', 'color-palette');
    document.querySelectorAll('#sessao td')[index].setAttribute('class', 'color');
    document.querySelectorAll('#sessao td')[0].removeAttribute('class');
    document.querySelectorAll('#sessao td')[0].removeAttribute('id');   
}

const paletteColor = document.querySelectorAll('#color-palette');
  
for(let index = 0; index < paletteColor.length; index += 1) {
    const colors = ['black', 'red', 'blue', 'green'];
    paletteColor[index].style.backgroundColor = colors[index];
}

document.body.appendChild(document.createElement('input'));
document.querySelector('input').setAttribute('id', 'board-size');
document.querySelector('#board-size').setAttribute('class', 'input');
document.querySelector('#board-size').setAttribute('type', 'number');
document.querySelector('#board-size').setAttribute('min', '5');
document.querySelector('#board-size').setAttribute('max', '50');
document.querySelector('#board-size').setAttribute('step', '1');

document.body.appendChild(document.createElement('button'));
document.querySelectorAll('button')[0].setAttribute('id', 'generate-board');
document.querySelector('#generate-board').setAttribute('class', 'gerar');
document.querySelector('#generate-board').innerText = 'VQV';

document.body.appendChild(document.createElement('button'));
document.querySelectorAll('button')[1].setAttribute('id', 'clear-board');
document.querySelector('#clear-board').setAttribute('class', 'botao');
document.querySelector('#clear-board').innerText = 'Limpar';

document.body.appendChild(document.createElement('section'));
document.querySelectorAll('section')[1].setAttribute('id', 'palete');
document.querySelector('#palete').setAttribute('class', 'pale');
document.querySelector('#palete').appendChild(document.createElement('table'));
document.querySelector('#palete table').appendChild(document.createElement('tr'));

const botaoGerar = document.querySelector('#generate-board');
const inputNumber = document.querySelector('#board-size');
inputNumber.value = 5;
let number = inputNumber.value * inputNumber.value;
botaoGerar.addEventListener('click', (event) => {
    if (inputNumber.value < 5) {
        alert("Board inválido!");
        inputNumber.value = 5;
    }else if (inputNumber.value > 50) {
        alert("Board inválido!");
        inputNumber.value = 50;
    }
    if (inputNumber.value > 7) {
        document.querySelector('#palete').style.width = '100%';
    }
    number = inputNumber.value * inputNumber.value;
    iniciar(number);  
});

iniciar(number);
function iniciar(number) {
    for (let index = 0; index < number; index += 1) {
        document.querySelector('#palete tr').appendChild(document.createElement('td'));
        document.querySelectorAll('#palete td')[index].setAttribute('id', 'pixel-board');
        document.querySelectorAll('#palete td')[index].setAttribute('class', 'pixel');
    }    
    const boardPixel = document.querySelectorAll('#palete td');
        paletteColor[0].className = 'selected';
        for(let index = 0; index < boardPixel.length; index += 1) {
            boardPixel[index].addEventListener('click', function () {
            boardPixel[index].style.backgroundColor = paletteColor[0].style.backgroundColor;
           });
        }
    for (let aux = 0; aux < paletteColor.length; aux += 1) {
       paletteColor[aux].addEventListener('click', function () {
           paletteColor[aux].className = 'selected';
       if (paletteColor[aux].className === 'selected'){
         for(let index = 0; index < boardPixel.length; index += 1) {
            boardPixel[index].addEventListener('click', function () {
            boardPixel[index].style.backgroundColor = paletteColor[aux].style.backgroundColor;
            paletteColor[aux].className = 'color';               
          });        
         }    
       }
       });
    }

    const botaoLimpar = document.querySelector('#clear-board');
    botaoLimpar.addEventListener('click', (event) => {
        for(let index = 0; index < boardPixel.length; index += 1) {
            boardPixel[index].style.backgroundColor = 'white';
        }
    });
}
