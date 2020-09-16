// Adicionando class 'selected' na cor selecionada 
let paletteColor = document.getElementsByClassName('color')

for (let index = 0; index < paletteColor.length; index += 1) {
    paletteColor[index].addEventListener('click', selectedColor)
}

function selectedColor () {
    for(let index = 0; index < paletteColor.length; index += 1) {
        if(paletteColor[index].classList.contains('selected')) {
            return getComputedStyle(paletteColor[index])
        } else {
            let removeSelectedClass = document.querySelector('.selected')
            removeSelectedClass.classList.remove('selected')
            paletteColor[index].classList.add('selected')
            return getComputedStyle(paletteColor[index])
        }
    }
}







