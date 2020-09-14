firstColor = document.getElementsByClassName("color")[0];
secondColor = document.getElementsByClassName("color")[1];
thirdColor = document.getElementsByClassName("color")[2];
fourthColor = document.getElementsByClassName("color")[3];
allColors = document.getElementsByClassName("color");
seletedColors = document.getElementsByClassName("color selected");
selectedElement = document.getElementsByClassName("pixel");

for (let index = 0; index <= allColors.length; index += 1) {
    allColors[index].addEventListner('clik', colorSelection);

for (let i = 0; i < selectedElement.length; i += 1) {
    let pixelBox = selectedElement[i]
    pixelBox.addEventListner ('click', fullFill);
}

function colorSelection (event) {
    seletedColors[0].className = 'color';
    event.target.className ='color selected'
}

function fullFill (event) {
    let elementColor = seletedColors[0].id
    event.target.style.backgroundColor = elementColor
}