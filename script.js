let palette = document.querySelector("#color-palette")
let fields = document.querySelectorAll(".pixel")
let colors = document.querySelectorAll(".color")
let generateBoard = document.querySelector("#generate-board")
const clearBoard = document.querySelector("#clear-board")
const board = document.querySelector("#pixel-board")
let options = ["red", "blue", "green", "aliceblue", "brown", "purple", "gray", "violet", "pink", "yellow", "coral", "orange", "gold", "darkkhaki", "peachpuff", "springgreen", "mediumspringgreen", "cyan", "teal", "slateblue", "indigo", "deeppink", "seagreen", "seashell", "darkslategray", "sandybrown", "chocolate", "peru", "wheat", "blueviolet", "magenta"]
let randoms = []
let number = 0

for (let i = 0; i < 5; i++){
    let div = document.createElement("div")
    for (let j = 0; j < 5; j++){
        let pixel = document.createElement("div")
        pixel.classList.add("pixel")
        div.appendChild(pixel)
}
board.appendChild(div)
}

palette.addEventListener("click", (event)=>{
    let selected = document.querySelector(".selected")
    selected.classList.remove("selected")
    color = event.target
    color.classList.add("selected")
})

for (let i = 1; i < colors.length; i = i + 1){
    number = Math.floor(Math.random() * options.length) + 1
    while (randoms.indexOf(number) != -1){
        number = Math.floor(Math.random() * options.length) + 1 
    }
    randoms.push(number)
    colors[i].style.backgroundColor = options[number]
}

for (let i = 0; i < fields.length; i += 1){
    fields[i].addEventListener("click", ()=>{
        let colorSelected = document.querySelector(".selected").style.backgroundColor
        fields[i].style.backgroundColor = colorSelected
    })
}

clearBoard.addEventListener("click", ()=>{
  for (let i = 0; i < fields.length; i += 1) {
    fields[i].style.backgroundColor = "rgb(255, 255, 255)"
  }  
})

generateBoard.addEventListener("click", ()=>{
    let boardSize = document.querySelector("#board-size").value
    if (parseInt(boardSize) < 5){
        boardSize = 5
    }
    else if (parseInt(boardSize) > 50){
        boardSize = 50
    }
    board.innerHTML = ""
    for (let i = 0; i < parseInt(boardSize); i++){
        let div = document.createElement("div")
        for (let j = 0; j < parseInt(boardSize); j++){
            let pixel = document.createElement("div")
            pixel.classList.add("pixel")
            div.appendChild(pixel)
    }
    board.appendChild(div)
    }
})


