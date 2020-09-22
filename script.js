let buttonSelected = document.querySelectorAll(".color");

for (let i = 0; i < buttonSelected.length; i += 1) {
    buttonSelected[i].addEventListener("click", function() {
        buttonSelected[i].className = "selected"
    });
}
