//selecionar a cor preta
window.onload = function() {
    let select = document.getElementById("color1")
    select.className += " select"
}

let botaoCorPreta = document.getElementById("color1");
let botaoCorAzul = document.getElementById("color2");
let botaoCorVerde = document.getElementById("color3");
let botaoCorCinza = document.getElementById("color4");
let cores = document.getElementsByClassName("color");

botaoCorPreta.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("select")
    }
    botaoCorPreta.classList.add("select")
let corPreta = window.getComputedStyle(botaoCorPreta, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corPreta

})
})
})


botaoCorAzul.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("select")
    }
    botaoCorAzul.classList.add("select")
let corAzul = window.getComputedStyle(botaoCorAzul, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corAzul

})
})
})


botaoCorVerde.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("select")
    }
    botaoCorVerde.classList.add("select")
let corVerde = window.getComputedStyle(botaoCorVerde, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corVerde

})
})
})


botaoCorCinza.addEventListener("click", function(){
    for (index = 0; index < cores.length; index += 1) {
        cores[index].classList.remove("select")
    }
    botaoCorCinza.classList.add("select")
let corCinza = window.getComputedStyle(botaoCorCinza, null).getPropertyValue("background-color");
document.querySelectorAll(".pixel").forEach(item => {
    item.addEventListener("click", function() {
        item.style.backgroundColor = corCinza

})
})
})