// -------------- GERAR COR ALEATÓRIA -------------- //

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let paleta = document.querySelectorAll(".color")
  for (let index = 0; index < paleta.length; index += 1) {
      paleta[index].classList.add(getRandomColor())
      paleta[index].style.backgroundColor = getRandomColor()
  }

// -------------- ESCOLHER A COR DA PALETA -------------- //

let selected = document.getElementsByClassName("color")[0]
selected.addEventListener("click", function(){
    selected1.classList.remove('selected')
    selected2.classList.remove('selected')
    selected3.classList.remove('selected')
    this.classList.add('selected')
})
let selected1 = document.getElementsByClassName("color")[1]
selected1.addEventListener("click", function(){
    selected.classList.remove('selected')
    selected2.classList.remove('selected')
    selected3.classList.remove('selected')
    this.classList.add('selected')
})

let selected2 = document.getElementsByClassName("color")[2]
selected2.addEventListener("click", function(){
    selected.classList.remove('selected')
    selected1.classList.remove('selected')
    selected3.classList.remove('selected')
    this.classList.add('selected')
})

let selected3 = document.getElementsByClassName("color")[3]
selected3.addEventListener("click", function(){
    selected.classList.remove('selected')
    selected1.classList.remove('selected')
    selected2.classList.remove('selected')
    this.classList.add('selected')
})

// -------------- MUDANDO A COR DOS PIXELS -------------- //

let quadro = document.querySelectorAll('.pixel')
for (let index = 0; index < quadro.length; index += 1) {
    let pixelSelecionado = quadro[index]
    pixelSelecionado.addEventListener("click", function() {
        pixelSelecionado.style.backgroundColor = trocaCor()
    })
}

function trocaCor() {
    let corSelecionada = document.getElementsByClassName("selected")[0]
    let cor = window.getComputedStyle(corSelecionada).backgroundColor
    return cor
}

// -------------- BOTÂO CLEAR -------------- //

let button = document.getElementById("button")
button.addEventListener("click", function() {
    for (let index = 0; index < quadro.length; index += 1) {
        quadro[index].style.backgroundColor = ""
    }
})