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






