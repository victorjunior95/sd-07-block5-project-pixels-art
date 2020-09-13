let palette = document.querySelector("#color-palette")
let listOfColors = palette.childNodes
let fields = document.querySelectorAll("td")

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
