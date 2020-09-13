let palette = document.querySelector("#color-palette")
let listOfColors = palette.childNodes

palette.addEventListener("click", (event)=>{
    let selected = document.querySelector(".selected")
    selected.classList.remove("selected")
    color = event.target
    color.classList.add("selected")
    console.log(palette)
})
