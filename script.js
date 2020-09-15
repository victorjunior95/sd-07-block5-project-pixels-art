window.onload = function () {
    let black = document.getElementById("color-black");
    let green = document.getElementById("color-green");
    let pourple = document.getElementById("color-pourple");
    let orange = document.getElementById("color-orange");
    let pixel1 = document.getElementsByClassName("pixel")
    let choosenColor = "color-black";

    green.addEventListener('click', function () {
        green.classList.add("slected");
        black.classList.remove("slected");
        pourple.classList.remove("slected");
        orange.classList.remove("slected");
        let choosenColor = "color-green";

    })
    pourple.addEventListener('click', function () {
        pourple.classList.add("slected");
        black.classList.remove("slected");
        green.classList.remove("slected");
        orange.classList.remove("slected");
        let choosenColor = "color-pourple";
    })
    orange.addEventListener('click', function () {
        orange.classList.add("slected");
        black.classList.remove("slected");
        green.classList.remove("slected");
        pourple.classList.remove("slected");
        let choosenColor = "color-orange"
    })
    black.addEventListener('click', function () {
        black.classList.add("slected");
        orange.classList.remove("slected");
        green.classList.remove("slected");
        pourple.classList.remove("slected");
        let choosenColor = "color-black";
    })
    for(let index = 0; pixel1.length <= 24; index += 1){
        let pixelValor = document.getElementsByClassName("pixel")[index];
        pixelValor.addEventListener("click", function(){
        pixelValor.style.backgroundColor = choosenColor;
        })
    }
}
