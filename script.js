document.querySelectorAll(".color").forEach(configureColorPaletteItemsAsClickable);

function removeClass(item)
{
    item.classList.remove("selected");
}

function configureColorPaletteItemsAsClickable(item)
{
    item.addEventListener("click", function(){
        document.querySelectorAll(".color").forEach(removeClass);
        item.classList.add("selected");
    })
}

let button = document.getElementById("clear-board");
button.addEventListener("click", function(){
    document.querySelectorAll(".pixel").forEach(changeBackgroundColorToWhite);
})

function changeBackgroundColorToWhite(item)
{
    item.style.backgroundColor = "white";
}






