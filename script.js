let chosencolor = document.querySelector("#c-black");
let colors = document.querySelectorAll(".color");
let selectedcolor = document.querySelector(".selected");

function changecolorselected(futureColor){
let previusColor = document.querySelector(".selected");
previusColor.classList.remove("selected");
futureColor.classList.add("selected");
}

function eventListener (list,theEvent,theFunction) {
for (let counter = 0 ; counter < colors.length ; counter += 1) {
    let referencelist = list[counter];
    referencelist.addEventListener(theEvent, theFunction(referencelist));
}
}

eventListener (colors,"click",changecolorselected);
