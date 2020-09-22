window.onload = function() {
    
    let pixelBoard = document.querySelector('#pixel-board');
    let button = document.querySelector('#clear-board');
    button.addEventListener('click', function() {
        pixelBoard.style.backgroundColor = "white";
})
}