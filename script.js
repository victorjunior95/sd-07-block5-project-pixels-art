/* Select a color and add/remove 'selected' class from others elements. The 'selected' 
class staying only on clicked element */
let color = document.querySelectorAll('.color');

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', function (event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.className += ' selected';
  })
}

// // Clear button 
// const clearBtn = document.querySelector('#clear-board');
// const pixelTable = document.querySelectorAll('.pixel');
 
// clearBtn.addEventListener('click', function () {
//   for (let index = 0; index < pixelTable.length; index += 1) {
//     pixelTable[index].style.backgroundColor = 'white';
//   }
// });
