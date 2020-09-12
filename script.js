// Seleção de cores da paleta

let black = document.querySelector("#black");
let azul = document.querySelector("#blue");
let red = document.querySelector("#red");
let purple = document.querySelector("#purple");
let cor = "black";

let ultima = document.querySelector(".selected");


black.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("black").classList.add("selected");
    cor = "black"
})

azul.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("blue").classList.add("selected");
    cor = "blue"
})

red.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("red").classList.add("selected");
    cor = "red"
})


purple.addEventListener("click",function(){
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("purple").classList.add("selected");
    cor = "purple"
})

//Mudar a cor dos pixels

let qualPixel = document.querySelectorAll(".pixel")


for (let i = 0; i < qualPixel.length; i++) {
    (function(i) {
         qualPixel[i].addEventListener("click", function() {
           
             qualPixel[i].style.backgroundColor = cor;
            
        })
    })(i);
 }



//botão para limpar o desenho
let botao = document.getElementById("clear-board");
botao.addEventListener("click", function(){
    for (let i in qualPixel){
        qualPixel[i].style.backgroundColor = "white";
    }
})