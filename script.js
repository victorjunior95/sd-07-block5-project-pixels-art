window.onload = function () {
    let black = document.getElementById("color-black");
    let green = document.getElementById("color-green");
    let pourple = document.getElementById("color-pourple");
    let orange = document.getElementById("color-orange");
    let pixel = document.getElementsByClassName("pixel")
    let choosenColor = black;

    green.addEventListener('click', function () {
        green.classList.add("slected");
        black.classList.remove("slected");
        pourple.classList.remove("slected");
        orange.classList.remove("slected");
        let choosenColor = green;

    })
    pourple.addEventListener('click', function () {
        pourple.classList.add("slected");
        black.classList.remove("slected");
        green.classList.remove("slected");
        orange.classList.remove("slected");
        let choosenColor = pourple;
    })
    orange.addEventListener('click', function () {
        orange.classList.add("slected");
        black.classList.remove("slected");
        green.classList.remove("slected");
        pourple.classList.remove("slected");
        let choosenColor = orange
    })
    black.addEventListener('click', function () {
        black.classList.add("slected");
        orange.classList.remove("slected");
        green.classList.remove("slected");
        pourple.classList.remove("slected");
        let choosenColor = black;
    })
    for(let index = 0; index <= 24; index += 1){
        let pixelValor = document.querySelectorAll("div .pixel")[index];
        pixelValor.addEventListener("click", function(){
        pixelValor.style.backgroundColor = choosenColor;
        })
    }
}
