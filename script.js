let divtotal=document.getElementById("pixel-board");
let nLinha = 5;
let pixel =[];
let linha = [];
let k=0;
/* criação da div em linhas*/
for(let i=0; i < nLinha; i += 1){

    linha[i]= document.createElement("div");
    linha[i].className = "linha";
    divtotal.appendChild(linha[i]);
    console.log(linha[i]);

        for(let j=0; j < nLinha; j += 1){

            pixel[k]= document.createElement("div");
            pixel[k].className="pixel";
            linha[i].appendChild(pixel[k]);
            k=k+1;
        }
}
let color =document.querySelectorAll(".color");

console.log(color);
for(let i=0; i < color.lenght; i +=1){
    console.log(color);
    color[i].addEventListener("click", function(event){
        let selected = document.querySelector(".selected");
                selected.classList.remove('.selected');
        event.target.className += " selected";

    }); 
}

for(let i=0; i < pixel.length; i += 1){
    pixel[i].addEventListener("click", function(){
        let selected=document.querySelector(".selected");
        console.log(selected);
        pixel[i].style.backgroundColor = window.getComputedStyle(selected).backgroundColor;
            

    });
}

let limpapx=document.getElementById("clear-board")

limpapx.addEventListener("click", function(){ 
    
    for(let i=0; i < pixel.length; i += 1){

        pixel[i].style.backgroundColor= "white";
    }


});
