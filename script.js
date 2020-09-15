let numberLines = 5;
let pixelboard = document.getElementById("pixel-board");

let pixel = [];
let linha = [];

let k=0;
for(let index =0; index < numberLines; index += 1){
    linha[index] = document.createElement("div");
    linha[index].className = "linha";
    pixelboard.appendChild(linha[index]);
    
    for(let j=0; j < numberLines; j += 1){
        pixel[k] = document.createElement("div");
        pixel[k].className = "pixel";
        linha[index].appendChild(pixel[k]);
    }
}

let color = document.querySelectorAll(".color");
//adicionando escuta para cada cor
for(let i=0; i < color.length; i+=1){
    color[i].addEventListener("click" , function(){
        let selected = document.querySelector(".selected");
        selected[0].classList.remove("selected");
        color[i].classList.add("selected");
    });
}
