let color = document.querySelectorAll('.color');
let selected = document.querySelectorAll('.pixel');
let clear = document.querySelector('#clear-board');
let div = document.querySelector('#black');

clearAll();

function clearAll() {
    clear.addEventListener('click', function () {
        for (let index = 0; index < selected.length; index += 1) {
            selected[index].style.backgroundColor = 'white';
        }
    });
}

    // function setClass() {
    //     div.classList.add('selected'); // aqui a palleta preta ja inicia com a "selected"
    // }


color.forEach(item => { // para cada
    item.addEventListener('click', function (event) {
        event.target.classList.add('selected');
        color.forEach(item => {
            if (item !== event.target) {
                item.classList.remove('selected');
            }
        });
    });
});



