window.onload = function(){
    //Declarando variáveis
    let colorBlack = document.getElementById("black");
    let colorBlue = document.getElementById("blue");
    let colorGreen = document.getElementById("green");
    let colorRed = document.getElementById("red");
    let colorSelect = "black";
    let btnClear = document.getElementById("clear-board");
    //Bonus
    let divMother = document.getElementById("pixel-board");
    let btnVQV = document.getElementById("generate-board");
      
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
    //Novo desafio
    btnVQV.addEventListener("click", function(){
        let inputNumb = document.getElementById("board-size");
        let inputNumbQuad = (inputNumb.value * inputNumb.value);
        for(let divIndex = 0; divIndex < inputNumb.value; divIndex += 1){
            let linhaDiv = document.createElement("div");
            divMother.appendChild(linhaDiv);
            linhaDiv.className = "tr";
            for(let divIndex2 = 0; divIndex2 < inputNumb.value; divIndex2 += 1){
                let divPixelSon = document.createElement("div");
                linhaDiv.appendChild(divPixelSon);
                divPixelSon.className = "pixel";
            }
        }
        //Usando estrutura de repetição para pintar os pixels
        for(let index = 0; index < inputNumbQuad; index += 1){ 
            let pixelValor = document.querySelectorAll("div .pixel")[index];
            pixelValor.addEventListener("click", function(){
            pixelValor.style.backgroundColor = colorSelect;
            });
        }
        //Adicionando o evento de tornar os pixels branco novamente
        btnClear.addEventListener("click", function(){
            for(let indexClear = 0; indexClear < inputNumbQuad; indexClear += 1){
                let pixelClear = document.querySelectorAll("div .pixel")[indexClear];
                pixelClear.style.backgroundColor = "white";
            }
        });
    
    });  
}