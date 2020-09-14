
let cores = document.querySelectorAll('.color');
cores[0].style.backgroundColor = 'black';
cores[1].style.backgroundColor = 'blue';
cores[2].style.backgroundColor = 'red';
cores[3].style.backgroundColor = 'green';
let pixelBoard = document.querySelector('#pixel-board');
for(index = 0; index < 25; index += 1){
    stylePixel();
}


// Cor preta selecionada
cores[0].addEventListener('click', function () {
    for(index = 0; index < 4; index += 1){
        cores[index].className = "color"
    }
    cores[0].className = "selected"
    pixelCor()
})
// Cor azul selecionada
cores[1].addEventListener('click', function () {
    for(index = 0; index < 4; index += 1){
        cores[index].className = "color"
    }
    cores[1].className = "selected"
    pixelCor()
})
// Cor vermelha selecionada
cores[2].addEventListener('click', function () {
    for(index = 0; index < 4; index += 1){
        cores[index].className = "color"
    }
    cores[2].className = "selected"
    pixelCor()
})
// Cor verde selecionada
cores[3].addEventListener('click', function () {
    for(index = 0; index < 4; index += 1){
        cores[index].className = "color"
    }
    cores[3].className = "selected"
    pixelCor()
})
let pixel = document.querySelectorAll('.pixel')
function pixelCor (){
    pixel.forEach(item => {
        item.addEventListener('click', function () {
            item.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    })
  })
}


function stylePixel () { 
    let caixa = document.createElement('div');
    caixa.className = 'pixel';
    caixa.style.backgroundColor = 'white';
    caixa.style.height = '40px';
    caixa.style.width = '40px';
    caixa.style.border = '1px solid black';
    caixa.style.display = 'inline-block';
    pixelBoard.appendChild(caixa);
}


