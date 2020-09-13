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


// Tamanho do board definido pelo usuário
let input = document.getElementById("board-size");
let tamanho =0;

input.addEventListener("change", function(){
    tamanho = input.value;
})
let vqv  = document.getElementById("generate-board");
vqv.addEventListener("click", function(){
    if (tamanho === 0){
        alert("Board inválido!")
        
    } else{
    document.getElementById("pixel-board").innerHTML = ' ';
    
    for (let i =0;i<tamanho;i+=1){
        let linha = document.createElement("div");
        linha.classList = "linha";
        document.getElementById("pixel-board").appendChild(linha);
        console.log ("linha");
        for (let j=0;j<tamanho;j+=1){
            let pixel = document.createElement("div");
            pixel.classList = "pixel"
            document.getElementsByClassName("linha")[i].appendChild(pixel);
        }
    }
    criarEventos();
    }

})


//Mudar a cor dos pixels

function criarEventos(){
    let qualPixel = document.querySelectorAll(".pixel")
for (let i = 0; i < qualPixel.length; i++) {
    (function(i) {
         qualPixel[i].addEventListener("click", function() {
           
             qualPixel[i].style.backgroundColor = cor;          
        })
    })(i);
 }
}
criarEventos();

//botão para limpar o desenho
let botao = document.getElementById("clear-board");
botao.addEventListener("click", function(){
    let qualPixel = document.querySelectorAll(".pixel")
    for (let i in qualPixel){
        qualPixel[i].style.backgroundColor = "white";
    }
})