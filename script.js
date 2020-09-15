let color = document.querySelectorAll('.color');
let selected = document.querySelectorAll('.pixel');
let clear = document.querySelector('#clear-board');
let div = document.querySelector('#black');

clearAll();
setClass();

function clearAll() {
    clear.addEventListener('click', function () {
        for (let index = 0; index < selected.length; index += 1) {
            selected[index].style.backgroundColor = 'white';
        }
    });
}

    function setClass() {
        div.classList.add('selected'); // aqui a palleta preta ja inicia com a "selected"
    }

    for (let index = 0; index < color.length; index += 1) { // efetuou uma busca pra ver se o elemento esta sem a classe "selected"
        color[index].addEventListener('click', function () {
            if (color[index].className !== 'selected') { //se não tiver insere
                color[index].classList.add('selected');
            } else {
                for (let index = 0; index < color.length; index += 1) { // se tiver remove
                    if (color[index].className === 'selected') {
                        color[index].classList.remove('selected');
                    }
                }
            }
        });
    }

