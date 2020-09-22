const selectedPixel = document.getElementById('pixel');
const clearButton = document.getElementById('clear-board');



clearButton.addEventListener('click', function(){
    for(let index = 0; index < selectedPixel; index += 1){
        selectedPixel[index].style.backgroundColor = 'white';
    }
});