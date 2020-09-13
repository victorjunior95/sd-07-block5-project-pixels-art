let palette = document.querySelector("#color-palette")
let listOfColors = palette.childNodes
palette.addEventListener("click", (event)=>{
    color = event.target
    color.classList.add("selected")
    console.log(color)
})
