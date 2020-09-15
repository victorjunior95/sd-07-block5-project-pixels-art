/* window.onload = function (){
    let colorBlack = document.querySelector(".black");
    let color = window.getComputedStyle(colorBlack).backgroundColor;
  //  console.log(color);
}*/

let numberLines = 5;
let pixelBoard = document.querySelector("#pixel-board");

let lines = [];
let pixel = [];
let k = 0;
for(index = 0; index < numberLines; index += 1){
    lines[index] = document.createElement("div");
    lines[index].className = "linha";
    pixelBoard.appendChild(lines[index]);
    
    for(let j = 0; j < numberLines; j += 1){
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        lines[index].appendChild(pixel[k]);
        k = k + 1;   
    }
}
let body = document.querySelector("body");
console.log(body)
let color = document.querySelectorAll(".color");

for(let index = 0; index < color.length; index += 1){
    color[index].addEventListener("click", function(){
        let selected = document.querySelector(".selected");
        console.log(selected)
        selected.classList.remove("selected");
        // poderia ser passado como parâmetro da função um "event" e na linha abaixo: "event.target.className += " selected"""
        color[index].classList.add("selected");
        console.log(color[index]);          
    })
}