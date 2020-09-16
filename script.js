// Adicionando evento click aos elementos da paleta
let paletteColor = document.getElementsByClassName('color')

for (let index = 0; index < paletteColor.length; index += 1) {
    paletteColor[index].addEventListener('click', selectedColor)
}

// Função para remover e adiocionar a class 'selected'

function selectedColor () {
    let elementTarget = this
    if (elementTarget.classList.contains('selected')) {
    } else {
        let removeSelectedClass = document.querySelector('.selected')
        removeSelectedClass.classList.remove('selected')
        elementTarget.classList.add('selected')
    }
}







