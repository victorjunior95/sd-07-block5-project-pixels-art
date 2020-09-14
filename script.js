const paletteColor = document.querySelectorAll('#color-palette');
  
for(let index = 0; index < paletteColor.length; index += 1) {
    const colors = ['black', 'red', 'blue', 'green'];
    paletteColor[index].style.backgroundColor = colors[index];
}

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
   
});


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
