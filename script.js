let blackColor = document.querySelector('.black');
let yellowColor = document.querySelector('.yellow');
let blueColor = document.querySelector('blue');
let greenColor = document.querySelector('.green');

yellowColor.addEventListener('click', function() {
    blackColor.className = 'color black';
    yellowColor.className = 'color yellow selected';
})

blueColor.addEventListener('click', function () {
    blackColor.className = 'color black';
    blueColor.className = 'color blue selected';
})

greenColor.addEventListener('click', function() {
    blackColor.className = 'color black';
    greenColor.className = 'color green selected';
}) 