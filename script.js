let myArray = [
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
[[''], [''], [''], [''], ['']],
]

let currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue('background-color');
const colorBlack = document.querySelector('#color1');
const colorOne = document.querySelector('#color2');
const colorTwo = document.querySelector('#color3');
const colorThree = document.querySelector('#color4');
const divPixelBoard = document.querySelector('#pixel-board');
const clear = document.querySelector('#clear-board');
const generateBoard = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');

function createBoard() {
/*global createBoard index:true*/
/*eslint no-undef: "error"*/
/*global createBoard index2:true*/
/*eslint no-undef: "error"*/
for (index = 0; index < myArray.length; index += 1) {
const container = document.createElement('div');
container.className = 'container';
divPixelBoard.appendChild(container);
for (index2 = 0; index2 < myArray[index].length; index2 += 1) {
const divPixel = document.createElement('div');
divPixel.className = 'pixel';
container.appendChild(divPixel);
}
}
function currentColorToBlack() {
currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue('background-color');
colorBlack.className = 'color selected';
colorOne.className = 'color';
colorTwo.className = 'color';
colorThree.className = 'color';
}

function currentColorToOne() {
currentColor = window.getComputedStyle(document.querySelector('#color2')).getPropertyValue('background-color');
colorOne.className = 'color selected';
colorBlack.className = 'color';
colorTwo.className = 'color';
colorThree.className = 'color';
}

function currentColorToTwo() {
currentColor = window.getComputedStyle(document.querySelector('#color3')).getPropertyValue('background-color');
colorTwo.className = 'color selected';
colorBlack.className = 'color';
colorOne.className = 'color';
colorThree.className = 'color';
}

function currentColorToThree() {
currentColor = window.getComputedStyle(document.querySelector('#color4')).getPropertyValue('background-color');
colorThree.className = 'color selected';
colorBlack.className = 'color';
colorOne.className = 'color';
colorTwo.className = 'color';
}

let classPixel = document.querySelectorAll('.pixel');

for(let e = 0 ; e < classPixel.length ; e += 1) {
classPixel[e].addEventListener('click', function() {
classPixel[e].style.background = currentColor
});
}

function clearBoard(){
/*global createBoard e:true*/
/*eslint no-undef: "error"*/
for(let e = 0 ; e < classPixel.length ; e+= 1) {
classPixel[e].style.background = 'white'
}
}
clear.addEventListener('click', clearBoard)


colorThree.addEventListener('click', currentColorToThree)
colorTwo.addEventListener('click', currentColorToTwo)
colorOne.addEventListener('click', currentColorToOne)
colorBlack.addEventListener('click', currentColorToBlack)

}
createBoard()

function randomColorOne() {
let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`;
colorOne.style.background = rgb
}
randomColorOne()

function randomColorTwo() {
let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`;
colorTwo.style.background = rgb
}
randomColorTwo()

function randomColorThree() {
let randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let r = randomBetween(0, 255);
let g = randomBetween(0, 255);
let b = randomBetween(0, 255);
let rgb = `rgb(${r},${g},${b})`;
colorThree.style.background = rgb     
}
randomColorThree()


function ArrayNew(){
/*global ArrayNew index:true*/
/*eslint no-undef: "error"*/
/*global ArrayNew index2:true*/
/*eslint no-undef: "error"*/
myArray = []
for (index = 0; index < boardSize.value ; index += 1){
myArray.push([])
for (index2 = 0; index2 < boardSize.value; index2 += 1){
myArray[index].push(3)
}
}
boardSize.value = ''
currentColor = window.getComputedStyle(document.querySelector('#color1')).getPropertyValue('background-color')
createBoard()
}

function checkBoardSize(){
if (boardSize.value === ''){
boardSize.value = 5
alert('Board inválido!')
}else if (boardSize.value < 5){
boardSize.value = 5
}else if (boardSize.value > 50){
boardSize.value = 50
}
return boardSize.value
}

function removewBoard() {
checkBoardSize()
while (divPixelBoard.firstChild) {
divPixelBoard.removeChild(divPixelBoard.firstChild);
}
ArrayNew()
}

generateBoard.addEventListener('click', removewBoard)
