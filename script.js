let cores = document.querySelectorAll('.color')
cores[0].style.backgroundColor = 'black'
cores[1].style.backgroundColor = 'blue'
cores[2].style.backgroundColor = 'red'
cores[3].style.backgroundColor = 'green'
let pixelBoard = document.querySelector("#pixel-board")


function stylePixel () { 
    let caixa = document.createElement('div')
    caixa.className = "pixel"
    caixa.style.backgroundColor = "white"
    caixa.style.height = "40px"
    caixa.style.width = "40px"
    caixa.style.border = "1px solid black"
    caixa.style.display = "inline-block"
    pixelBoard.appendChild(caixa)
}

for(index = 0; index < 25; index += 1){
    stylePixel()
}