window.onload = function(){
    //Declarando variáveis
    let colorBlack = document.getElementById("black");
    let colorBlue = document.getElementById("blue");
    let colorGreen = document.getElementById("green");
    let colorRed = document.getElementById("red");
    let colorSelect = "black";
    
    //Adicionando 4 eventos para selecionar cor específica
    colorBlue.addEventListener("click", function(){
        colorBlue.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "blue";
    });
    colorGreen.addEventListener("click", function(){
        colorGreen.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "green";
    });
    colorRed.addEventListener("click", function(){
        colorRed.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorSelect = "red";
    });
    colorBlack.addEventListener("click", function(){
        colorBlack.classList.add("selected");
        //removendo das outras 3 cores
        colorBlue.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
        colorSelect = "black"
    });
    
    //Usando estrutura de repetição para pintar os pixels
    for(let index = 0; index <= 24; index += 1){
        let pixelValor = document.querySelectorAll("div .pixel")[index];
        pixelValor.addEventListener("click", function(){
        pixelValor.style.backgroundColor = colorSelect;
        });
    } 
}