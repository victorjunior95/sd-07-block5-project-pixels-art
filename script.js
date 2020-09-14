/* Select a color and add/remove 'selected' class from others elements. The 'selected' 
class staying only on clicked element */
const blackColor = document.querySelector('.black');
const yellowColor = document.querySelector('.yellow');
const blueColor = document.querySelector('.blue');
const greenColor = document.querySelector('.green');
const colorPallete = document.querySelector('.color');

greenColor.addEventListener('click', function () {
  blackColor.className = 'black color';
  yellowColor.className = 'yellow color';
  blueColor.className = 'blue color';
  greenColor.className = 'green color selected'
});

blueColor.addEventListener('click', function () {
  blackColor.className = 'black color';
  yellowColor.className = 'yellow color';
  greenColor.className = 'green color';
  blueColor.className = 'blue color selected';
});

yellowColor.addEventListener('click', function () {
  blackColor.className = 'black color';
  blueColor.className = 'blue color';
  greenColor.className = 'green color';
  yellowColor.className = 'yellow color selected';
});

blackColor.addEventListener('click', function () {
  yellowColor.className = 'yellow color';
  blueColor.className = 'blue color';
  greenColor.className = 'green color';
  blackColor.className = 'black color selected';
});

// Clear button 
const clearBtn = document.querySelector('#clear-board');
const pixelTable = document.querySelectorAll('.pixel');

// Clear button  
clearBtn.addEventListener('click', function () {
  for (let index = 0; index < pixelTable.length; index += 1) {
    pixelTable[index].style.backgroundColor = 'white';
  }
});
