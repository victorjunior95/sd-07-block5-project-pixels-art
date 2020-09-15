let palette = document.querySelector("#color-palette")
let fields = document.querySelectorAll(".pixel")
let colors = document.querySelectorAll(".color")
let boardSize = document.querySelector("#board-size").value
let generateBoard = document.querySelector("#generate-board")
let options = ["red", "blue", "green", "aliceblue", "brown", "purple", "gray", "violet", "pink", "yellow", "coral", "orange", "gold", "darkkhaki", "peachpuff", "springgreen", "mediumspringgreen", "cyan", "teal", "slateblue", "indigo", "deeppink", "seagreen", "seashell", "darkslategray", "sandybrown", "chocolate", "peru", "wheat", "blueviolet", "magenta"]
let randoms = []
let number = 0

palette.addEventListener("click", (event)=>{
    let selected = document.querySelector(".selected")
    selected.classList.remove("selected")
    color = event.target
    color.classList.add("selected")
})

for (let i = 1; i < colors.length; i = i + 1){
    number = Math.floor(Math.random() * colors.length) + 1
    while (randoms.indexOf(number) != -1){
        number = Math.floor(Math.random() * colors.length) + 1 
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

function clearBoard(){
    for (let i = 0; i < fields.length; i += 1){
       fields[i].style.backgroundColor = "rgb(255, 255, 255)"
    }
}

generateBoard.addEventListener("click", ()=>{
    let boardSize = document.querySelector("#board-size").value
    for (let i = 0; i < fields.length; i++){
        fields[i].style.width = boardSize + "px"
        fields[i].style.height = boardSize + "px"
    }
})


