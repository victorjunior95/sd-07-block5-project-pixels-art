window.onload = function() {
    
    let pixel = document.querySelectorAll('.pixel');
    let button = document.querySelector('#clear-board');
    button.addEventListener('click', function() {
    for (let i in pixel) {
        pixel[i].style.backgroundColor = "white";
    }
})
}