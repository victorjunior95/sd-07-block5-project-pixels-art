// Seleção de cores da paleta

let black = document.querySelector("#black");
let azul = document.querySelector("#blue");
let red = document.querySelector("#red");
let purple = document.querySelector("#purple");

let ultima = document.querySelector(".selected")



black.addEventListener("click",function(){
    console.log(document.getElementsByClassName("selected").style.backgroundColor);
    // ultima.class = "color";
    // selecao.class = "color selected";
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("black").classList.add("selected");

})

azul.addEventListener("click",function(){
    console.log(document.querySelector(".selected").style.backgroundColor);
    // ultima.class = "color";
    // selecao.class = "color selected";
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("blue").classList.add("selected");

})

red.addEventListener("click",function(){
    console.log(document.querySelector(".selected").style.backgroundColor);
    // ultima.class = "color";
    // selecao.class = "color selected";
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("red").classList.add("selected");

})


purple.addEventListener("click",function(){
    console.log(document.querySelector(".selected").style.backgroundColor);
    // ultima.class = "color";
    // selecao.class = "color selected";
    document.getElementsByClassName("selected")[0].classList = "color";
    document.getElementById("purple").classList.add("selected");

})

//Mudar a cor dos pixels



//pra zerar os pixels talvez seja necessario pegar todos os elementos em um array e usar um for para branquear tudo. 