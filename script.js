document.querySelectorAll("#color-palette").forEach(removeClass);
document.querySelectorAll("#color-palette").forEach(selectColor);

function removeClass()
{
    item.classList.remove("selected");
}

function selectColor()
{
    item.addEventListener("click", function(){
        item.className = "selected";
    })
}






