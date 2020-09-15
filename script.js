let chosencolor = document.querySelector("#c-black");
let colors = document.querySelectorAll(".color");

function changecolorselected(futureColor){
let previusColor = document.querySelector(".selected")
previusColor.classList.remove("selected");
futureColor.classList.add("selected");
}

function eventchangecolor () {
    for (key in colors) {
        colors[key].addEventListener("click",changecolorselected(colors[key]))
    }
}