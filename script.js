
let quadrados = document.querySelectorAll(".pixel");
let botaoDeLimpar = document.querySelector("#clear-board");
let cores= document.querySelectorAll(".color");


quadrados.forEach(function(item){
    item.addEventListener("click", function(){
        let selecionado = document.querySelector(".selected")
        item.style.backgroundColor = window.getComputedStyle(selecionado).backgroundColor;
    })
})

function selecionarCor (item){
    item.addEventListener("click", function(){
        let selecionado = document.querySelector(".selected");
        selecionado.classList.remove("selected");
        item.classList.add("selected")
    })
}
cores.forEach(selecionarCor)



