const clearBtn = document.getElementById('clear-board');
const pixelTable = document.querySelectorAll('.pixel');

// Clear button  
clearBtn.addEventListener('click', function () {
    for (let index = 0; index < pixelTable.length; index += 1) {
    pixelTable[index].style.backgroundColor = 'rgb(255, 255, 255)';
}
});
