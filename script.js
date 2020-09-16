

let selectedColor = document.querySelector('.black');
function creatPixelBoard(value) {
    let pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';
    for (let index = 0; index < value; index += 1) {
        let pixelLine = document.createElement('div');
        pixelLine.className = 'pixel-line';
        for (let index = 0; index < value; index += 1) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixelLine.appendChild(pixel);

            pixel.addEventListener('click', function (event) {
                let selected = document.querySelector('.selected');
                event.target.style.backgroundColor = selected.style.backgroundColor;
            })
        }
        pixelBoard.appendChild(pixelLine);
    }
}


creatPixelBoard(5);

let pixelSelected = document.querySelectorAll('.pixel');
pixelSelected.forEach(changePixelSelected);
function changePixelSelected (value) {
    for (let index in pixelSelected) {
        value.addEventListener('click', function (event) {
            let color = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
            value.style.backgroundColor = color;
        })
    }
}

document.querySelectorAll('.color').forEach(selectedClick);
function selectedClick (pixel) {
    pixel.addEventListener('click', function() {
        document.querySelectorAll('.color');
        pixel.classList.add('selected');
        selectedColor = pixel;
        pixel.classList.remove('selected');
    });
}

let pixels = document.querySelectorAll('.pixel');
let clearPixelBoard = document.querySelector('#clear-board');
clearPixelBoard.addEventListener('click', function(event) {
    for (let index = 0; index < pixels.length; index += 1) {
        pixels[index].style.backgroundColor = 'white';
    }
});
