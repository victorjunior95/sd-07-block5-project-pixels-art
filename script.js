const botaoLimpar = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

botaoLimpar.style.backgroundColor = 'white';
botaoLimpar.addEventListener('click', function(){
    for(const pixel of pixels){
        pixel.style.backgroundColor = 'white';
    }
});