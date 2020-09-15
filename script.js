
    let color = document.querySelectorAll('.color');
    let selected = document.querySelectorAll('.pixel');
    let clear = document.querySelector('#clear-board');
    clearAll();

function clearAll() {
    clear.addEventListener('click', function () {
        for (let index = 0; index < selected.length; index += 1) {
            selected[index].style.backgroundColor = 'white';
        }
    });
}


