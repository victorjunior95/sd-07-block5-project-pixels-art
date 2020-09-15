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
function setClass(){
    div.classList.add('selected');
    console.log(div);
}
