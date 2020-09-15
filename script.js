let color = document.querySelectorAll('.color');
let selected = document.querySelectorAll('.pixel');
let clear = document.querySelector('#clear-board');

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
    let div = document.querySelector('#black');
    div.classList.add('selected');
    console.log(div);
}
