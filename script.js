
let black = document.querySelector(".black");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let selected = document.querySelector(".selected");
let pixel = document.querySelectorAll(".pixel");



    
    
selected = window.getComputedStyle(selected, null).getPropertyValue("background-color");

black.addEventListener("click", function (){
    selected = window.getComputedStyle(black, null).getPropertyValue("background-color");
    
})
blue.addEventListener("click", function (){
    selected = window.getComputedStyle(blue, null).getPropertyValue("background-color");
    
})
red.addEventListener("click", function (){
    selected = window.getComputedStyle(red, null).getPropertyValue("background-color");
    
})
green.addEventListener("click", function (){
    selected = window.getComputedStyle(green, null).getPropertyValue("background-color");
    
})


for (let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener("click", function() {
      pixel[i].style.backgroundColor = selected;
    });
}







