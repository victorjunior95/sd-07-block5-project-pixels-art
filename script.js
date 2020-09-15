let palette = document.querySelector("#color-palette")
let fields = document.querySelectorAll(".pixel")
let boardSize = document.querySelector("#board-size").value
let generateBoard = document.querySelector("#generate-board")
let colors = ["red", "blue", "green", "aliceblue", "brown", "purple", "gray", "violet", "pink", "yellow"]

palette.addEventListener("click", (event)=>{
    let selected = document.querySelector(".selected")
    selected.classList.remove("selected")
    color = event.target
    color.classList.add("selected")
})

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

window