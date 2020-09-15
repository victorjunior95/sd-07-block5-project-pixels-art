//selecionar a cor preta
window.onload = pintarPreta
   

let botaoCorPreta = document.getElementById("color1");
let botaoCorAzul = document.getElementById("color2");
let botaoCorVerde = document.getElementById("color3");
let botaoCorCinza = document.getElementById("color4");
let cores = document.getElementsByClassName("color");

botaoCorPreta.addEventListener("click", pintarPreta)

function pintarPreta() {
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("selected")
    }
    botaoCorPreta.classList.add("selected")
let corPreta = window.getComputedStyle(botaoCorPreta, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corPreta
        })
    })
}
botaoCorAzul.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("selected")
    }
    botaoCorAzul.classList.add("selected")
let corAzul = window.getComputedStyle(botaoCorAzul, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corAzul

})
})
})


botaoCorVerde.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("selected")
    }
    botaoCorVerde.classList.add("selected")
let corVerde = window.getComputedStyle(botaoCorVerde, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corVerde

})
})
})


botaoCorCinza.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("selected")
    }
    botaoCorCinza.classList.add("selected")
let corCinza = window.getComputedStyle(botaoCorCinza, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corCinza

})
})
})