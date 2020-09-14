window.onload = function(){
    //Declarando variáveis
    let colorBlack = document.getElementById("black");
    let colorBlue = document.getElementById("blue");
    let colorGreen = document.getElementById("green");
    let colorRed = document.getElementById("red");
    
    
    //Adicionando 4 eventos para selecionar cor específica
    colorBlue.addEventListener("click", function(){
        colorBlue.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
    });
    colorGreen.addEventListener("click", function(){
        colorGreen.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorBlue.classList.remove("selected");
        colorRed.classList.remove("selected");
    });
    colorRed.addEventListener("click", function(){
        colorRed.classList.add("selected");
        //removendo das outras 3 cores
        colorBlack.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorBlue.classList.remove("selected");
    });
    colorBlack.addEventListener("click", function(){
        colorBlack.classList.add("selected");
        //removendo das outras 3 cores
        colorBlue.classList.remove("selected");
        colorGreen.classList.remove("selected");
        colorRed.classList.remove("selected");
    });

    


















}