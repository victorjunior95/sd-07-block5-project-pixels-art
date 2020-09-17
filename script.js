const color = document.querySelectorAll(".color");

for(let i = 0 ; i < color.length; i += 1) {
color[i].addEventListener("click", function(){
 let selected = document.querySelector(".selected");
 selected.classList.remove('selected');
 event.target.className += "selected";
})}

pixelBoard.addEventListener("click ",pixelStyle)
function pixelStyle(){
let selected = document.querySelector(".selected");
event.target.style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
}

for (let i =0 ; i < pixel.length; i += 1) {
    pixel[i].addEventListener ("click", pixelColor)
    function pixelColor(){
let selected = document.querySelector(".selected")
pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor
}}

let buttonCleanner = document.getElementById("clear-board");

buttonCleanner.addEventListener("click", clear)

function clear ()  {
for (let i = 0 ; i < pixel.length ; i +=1){

    pixel[i].style.backgroundColor = "white";
}

}


