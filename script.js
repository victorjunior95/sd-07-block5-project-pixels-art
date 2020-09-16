// criar um variavel dinâmico para usuario digita numero de quadrados. 
let numberLines = 5;

// variavel que sera igual a Id pixel-board
let pixelBorad = document.getElementById("pixel-board");

// criando a variaveis para linha e quadrado
let pixel = [];
let line = [];

//adicionar um div  com a classe linha
line[0] = document.createElement("div");
line[0].className = "line"

// armazenar os quadrado
let lineZero = 0 ;

// criar a linha de comprimento
for(let index = 0; index < numberLines; index +=1){
    line[index] = document.createElement("div");
    line[index].className = "line";
    pixelBorad.appendChild(line[index]);

//criar os quadrados  dentro da linha
    for(let ind2 = 0 ; ind2 < numberLines; ind2 +=1){
    pixel[lineZero] = document.createElement("div");
    pixel[lineZero].className="pixel";
    line[index].appendChild(pixel[lineZero]);
    lineZero = lineZero + 1;

    }
}
