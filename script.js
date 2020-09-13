const blackColor = document.querySelector('.black');
const yellowColor = document.querySelector('.yellow');
const blueColor = document.querySelector('blue');
const greenColor = document.querySelector('.green');

yellowColor.addEventListener('click', function() {
    blackColor.className = 'color black';
    yellowColor.className = 'color yellow selected';
})

// blueColor.addEventListener('click', function () {
//     blackColor.className = 'color black';
//     blueColor.className = 'color blue selected';
// })

// greenColor.addEventListener('click', function() {
//     blackColor.className = 'color black';
//     greenColor.className = 'color green selected';
// }) 