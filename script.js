window.onload = function (){
    let colorBlack = document.querySelector(".black");
    let color = window.getComputedStyle(colorBlack).backgroundColor;
  //  console.log(color);
}

let black = document.querySelector(".black");

console.log(black)
console.log(document.getElementsByClassName("black"))
let green = document.querySelector(".green");
let pink = document.querySelector(".pink");
let yellow = document.querySelector(".yellow");

let pixels = document.querySelector(".pixel");
let palette = document.querySelectorAll(".color");
console.log(palette)
palette.addEventListener("click", function(){
})





// armazenar a cor selecionada em uma função ou variável
// deletar a classe selected da cor atual 
// adicionar a classe selected na cor selecionada

   //for para criar a tabela dinamicamente - finalizar apenas quando o restante estiver ok 
    /*let pixelBoard = document.querySelector("#pixel-board");
    let colunasELinhas = 10;
    let lines = []
    for(index = 0; index < colunasELinhas; index += 1){
        for(index = 0; index < colunasELinhas; index += 1){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            lines.push(pixel)
        };
        console.log(lines)
        pixelBoard.appendChild(lines)
        // lines é um array - fazer outro for passando por cada elemento para add ele no appendChild
    }
}
console.log("teste");

function selectedColor(){

}*/ 