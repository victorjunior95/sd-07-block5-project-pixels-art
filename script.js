const colors = document.getElementsByClassName('color')

colors[0].style.backgroundColor = "black"
colors[1].style.backgroundColor = "blue"
colors[2].style.backgroundColor = "green"
colors[3].style.backgroundColor = "red"

const colorBlack = document.getElementsByClassName('color')[0]
const colorBlue = document.getElementsByClassName('color')[1]
const colorGreen = document.getElementsByClassName('color')[2]
const colorRed = document.getElementsByClassName('color')[3]


colorBlack.addEventListener('click', function () {
    colorBlack.className = 'color selected'
    colorBlue.className = 'color'
    colorRed.className='color'
    colorGreen.className='color'
    const colorSelected =document.querySelector('.selected')
    const blackColor = colorSelected.style.backgroundColor
    localStorage.setItem('color', blackColor)
})

colorBlue.addEventListener('click', function () {
    colorBlue.className = 'color selected'
    colorGreen.className='color'
    colorRed.className='color'
    colorBlack.className='color'
    const colorSelected = document.querySelector('.selected')
    const blueColor = colorSelected.style.backgroundColor
    localStorage.setItem('color', blueColor)
})

colorGreen.addEventListener('click', function () {
    colorGreen.className = 'color selected'
    colorBlue.className = 'color'
    colorRed.className='color'
    colorBlack.className='color'
    const colorSelected = document.querySelector('.selected')
    const greenColor = colorSelected.style.backgroundColor
    localStorage.setItem('color', greenColor)
})

colorRed.addEventListener('click', function () {
    colorRed.className = 'color selected'
    colorBlue.className = 'color'
    colorGreen.className='color'
    colorBlack.className='color'
    const colorSelected = document.querySelector('.selected')
    const redColor = colorSelected.style.backgroundColor
    localStorage.setItem('color', redColor)
})



const boxes = document.getElementsByClassName('pixel')[0]

boxes.addEventListener('click', function () {

    boxes.style.backgroundColor = localStorage.getItem('color')

})

const select = document.querySelector('.selected').style.backgroundColor
localStorage.setItem('color', select)


/*for (let index = 0; index < boxes.length; index += 1) {
    let selectBoxes = boxes[index]
}*/