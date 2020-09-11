window.onload = criarTela

let color1 = document.querySelector(".c1")
let color2 = document.querySelector(".c2")
let color3 = document.querySelector(".c3")
let color4 = document.querySelector(".c4")

color1.style.backgroundColor = "black"
color2.style.backgroundColor = "red"
color3.style.backgroundColor = "blue"
color4.style.backgroundColor = "green"

/* Crianto a Tela */

function criarTela(){
    let printSize = document.querySelector("#board-size").value
    let tabela = document.querySelector(".pixel-board")
    tabela.innerHTML = ""
    for (let i = 0; i< printSize; i+=1){
        let linha = document.createElement("tr")
            for (let i = 0; i< printSize; i+=1) {
                let coluna = document.createElement("td")
                coluna.className = "pixel"
                coluna.style.height = "40px"
                coluna.style.width = "40px"
                coluna.style.backgroundColor = "green"
                coluna.style.border = "black 1px solid"
                coluna.addEventListener("click", pintar)
                linha.append(coluna)
            }
        tabela.append(linha)
    }
}

/* Botão VQV */

let btnVQV = document.querySelector("#generate-board")
btnVQV.addEventListener("click",criarTela)

/* Pintando */

let corAtual = "black"

function pintar(){
    event.target.style.backgroundColor = "black"
}