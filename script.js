let divtotal=document.getElementById("pixel-board");
let nLinha=5;

let linha = [];

/* criação da div em linhas*/
for(let i=0; i < nLinha; i += 1){

    linha[i]=document.createElement("div");
    linha[i]=className = "linha";
    divtotal.appendChild(linha[i]);
    console.log(linha[i]);
}
