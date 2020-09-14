




let x = document.querySelectorAll('.color');

for (let i = 0; i < x.length; i += 1) {
    x[i].addEventListener('click', function () {
        let a = document.querySelector('.selected');
        a.classList.remove('selected');
        x[i].classList.add('selected');
        console.log(x[i]);
    });
}

let line = document.querySelectorAll('.line');
let pixel = document.querySelectorAll('.pixel');

for (let i = 0; i < line.length; i+= 1) {
    for (let j = 0; j < pixel.length; j += 1) {
        pixel[i, j].addEventListener('click', function () {
            let a = document.querySelector('.selected');
            pixel[i,j].style.backgroundColor = window.getComputedStyle(a).backgroundColor; 
        });
        
    }
}

let clearAll = document.querySelector('#clear-board');
clearAll.addEventListener('click', function () { 
    for (let i = 0; i < line.length; i+= 1) {
        for (let j = 0; j < pixel.length; j += 1) { 
            pixel[i,j].style.backgroundColor = 'white'; 
        }
    }
})