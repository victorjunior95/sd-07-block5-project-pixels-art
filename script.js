let pixels = document.querySelectorAll('.pixel');
let clear = document.getElementById('clear-board');

pixels.forEach(function (index) {
    index.addEventListener('click', function () {
        index.style.backgroundColor = "rgb(0, 0, 0)";
    });
});


clear.addEventListener('click', function () {
    pixels.forEach(function (index) {
        index.style.backgroundColor = "rgb(255, 255, 255)";
    })
})

