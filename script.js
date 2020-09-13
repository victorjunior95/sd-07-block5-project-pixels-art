let palette = document.querySelector("#color-palette")

palette.addEventListener("click", (event)=>{
    color = event.target
    color.style.backgroundColor = "black"
    console.log(color)
})