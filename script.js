//Clear button 
const clearBtn = document.getElementById('clear-board');
const pixelTable = document.getElementsByClassName('pixel');

//Clear button  
clearBtn.addEventListener('click', function () {
  for (let index = 0; index < pixelTable.length; index += 1) {
      pixelTable[index].style.backgroundColor = 'white';
    }
});

/*Select a color and add/remove 'selected' class from others elements. The 'selected' 
class staying only on clicked element*/
const blackColor = document.querySelector('.black');
const yellowColor = document.querySelector('.yellow');
const blueColor = document.querySelector('.blue');
const greenColor = document.querySelector('.green');
let colorPallete = document.querySelector('.color');

blackColor.addEventListener('click', function () {
    colorPallete[1].classList.remove('selected');
    colorPallete[2].classList.remove('selected');
    colorPallete[3].classList.remove('selected');
    colorPallete[0].classList.add('selected');
  })

yellowColor.addEventListener('click', function () {
    colorPallete[0].classList.remove('selected');
    colorPallete[2].classList.remove('selected');
    colorPallete[3].classList.remove('selected');
    colorPallete[1].classList.add('selected');
})
blueColor.addEventListener('click', function () {
    colorPallete[0].classList.remove('selected');
    colorPallete[1].classList.remove('selected');
    colorPallete[3].classList.remove('selected');
    colorPallete[2].classList.add('selected');
})

greenColor.addEventListener('click', function () {
    colorPallete[0].classList.remove('selected');
    colorPallete[1].classList.remove('selected');
    colorPallete[3].classList.remove('selected');
    colorPallete[2].classList.add('selected');
})


