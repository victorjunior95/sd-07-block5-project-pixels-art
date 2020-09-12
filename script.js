
window.onload = function(){
    let myArray = [
        [[''],[''],[''],[''],['']],
        [[''],[''],[''],[''],['']],
        [[''],[''],[''],[''],['']],
        [[''],[''],[''],[''],['']],
        [[''],[''],[''],[''],['']],
    ]
    //
    let currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue("background-color")
    let colorBlack = document.querySelector('#color1');
    let colorRed = document.querySelector('#color2');
    let colorBlue = document.querySelector('#color3');
    let colorGreen = document.querySelector('#color4');
    let divPixelBoard = document.querySelector('#pixel-board')

    let arr = []
    function ColumnAndlines(numberchoice){
        let number = numberchoice;
        for (i = 0; i < number ; i += 1){
            arr.push([])
        for (j = 0; j < number; j += 1){
            arr[i].push(3)
        }
        }
    }
    ColumnAndlines(5)    

    function createPalette() {
        for(i = 0; i < myArray.length; i += 1){
            let container = document.createElement('div')
            container.className = "container"
            divPixelBoard.appendChild(container)
            for(j = 0; j < myArray[i].length; j += 1){
                let divPixel = document.createElement('div')
                divPixel.className = "pixel"
                divPixel.innerText = 'ola'
                container.appendChild(divPixel);
            }
                
    }
    }
    createPalette()
    

function currentColorToBlack(){
    // currentColor = colorBlack
    currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue("background-color")
    colorBlack.className = `color selected`;
    colorRed.className = `color`;
    colorBlue.className = `color`;
    colorGreen.className = `color`;

}
    colorBlack.addEventListener('click', currentColorToBlack)    

function currentColorToRed(){
    currentColor = window.getComputedStyle(document.querySelector('#color2')).getPropertyValue("background-color")
    colorRed.className = `color selected`;
    colorBlack.className = `color`;
    colorBlue.className = `color`;
    colorGreen.className = `color`;
}
colorRed.addEventListener('click', currentColorToRed)

function currentColorToBlue(){
    // currentColor = colorBlue
    currentColor = window.getComputedStyle(document.querySelector('#color3')).getPropertyValue("background-color")
    colorBlue.className = `color selected`;
    colorBlack.className = `color`;
    colorRed.className = `color`;
    colorGreen.className = `color`;
}
colorBlue.addEventListener('click', currentColorToBlue)

function currentColorToGreen(){
    // currentColor = colorGreen
    currentColor = window.getComputedStyle(document.querySelector('#color4')).getPropertyValue("background-color")
    colorGreen.className = `color selected`;
    colorBlack.className = `color`;
    colorRed.className = `color`;
    colorBlue.className = `color`;
}
colorGreen.addEventListener('click', currentColorToGreen)

let classPixel = document.querySelectorAll('.pixel');

for(let e = 0 ; e < classPixel.length ; e++) {
  classPixel[e].addEventListener('click', function() {
    classPixel[e].style.background = currentColor
  });
}
// console.log(currentColor)
    // function changeColor() {
    //     teste.style.backgroundColor = 'Blue'
    // }
    // teste.addEventListener('click', changeColor);

// myAaary(5)
         // divPixelBoard.appendChild(divi)
    //um comentario


// console.log(arr)
}


// let classPixel = document.querySelectorAll()

// function mostrarPixel(){
//     alert ("oi")
// }
// mostrarPixel()
// classPixel.addEventListener('click', mostrarPixel)