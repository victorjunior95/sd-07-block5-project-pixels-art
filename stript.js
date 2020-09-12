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
    if (printSize == "") {
        alert("Board inválido!")
    }
    let tabela = document.querySelector("#pixel-board")
    tabela.innerHTML = ""
    for (let i = 0; i< printSize; i+=1){
        let linha = document.createElement("tr")
            for (let i = 0; i< printSize; i+=1) {
                let coluna = document.createElement("td")
                coluna.className = "pixel"
                coluna.style.height = "40px"
                coluna.style.width = "40px"
                coluna.style.backgroundColor = "branco"
                coluna.style.border = "black 1px solid"
                coluna.addEventListener("click", pintar)
                linha.append(coluna)
            }
        tabela.append(linha)
    }
}

/* Botão Limpar */
let btnLimpar = document.querySelector("#clear-board")
btnLimpar.addEventListener("click", criarTela)

/* Botão VQV */

let btnVQV = document.querySelector("#generate-board")
btnVQV.addEventListener("click",criarTela)

/* Pintando */

let corAtual = "black"

function pintar(){
    event.target.style.backgroundColor = corAtual
}

/* Menu Cores */
let c1 = document.querySelector(".c1")
c1.addEventListener("click", clickc1)

let c2 = document.querySelector(".c2")
c2.addEventListener("click", clickc2)

let c3 = document.querySelector(".c3")
c3.addEventListener("click", clickc3)

let c4 = document.querySelector(".c4")
c4.addEventListener("click", clickc4)

function clickc1(){
    corAtual = "black"
    c1.className = "color c1 selected"
    c2.className = "color c2"
    c3.className = "color c3"
    c4.className = "color c4"
}

function clickc2(){
    corAtual = "red"
    c1.className = "color c1"
    c2.className = "color c2 selected"
    c3.className = "color c3"
    c4.className = "color c4"
}

function clickc3(){
    corAtual = "blue"
    c1.className = "color c1"
    c2.className = "color c2"
    c3.className = "color c3 selected"
    c4.className = "color c4"
}

function clickc4(){
    corAtual = "green"
    c1.className = "color c1"
    c2.className = "color c2"
    c3.className = "color c3"
    c4.className = "color c4 selected"
}
