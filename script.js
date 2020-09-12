document.querySelectorAll(".color").forEach(removeClass);
document.querySelectorAll(".color").forEach(selectColor);

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






