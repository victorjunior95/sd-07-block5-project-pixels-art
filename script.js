let pixel = document.getElementsByClassName("pixel")
for (let index in pixel) {
    let selectedColor = document.getElementsByClassName("selected")[0]
    pixel[index].addEventListener("click", function () {
        pixel[index].style.backgroundColor = getComputedStyle(selectedColor).backgroundColor
    })
}