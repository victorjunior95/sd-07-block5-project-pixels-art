window.onload = function () {

  document.getElementById("clear-board").addEventListener("click",function () {
    const elements = document.getElementsByClassName("pixel");
    for (let key = 0; key < elements.length; key += 1) {
      elements[key].style.backgroundColor = "rgb(255, 255, 255)";
    }
  });

  let element;
  let origin;
  let pixel = document.querySelectorAll(".pixel");

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener("click", function (e) {
      element = e.target;
      origin = document.querySelector(".selected");
      element.style.backgroundColor = origin.classList[1];
    });
  }
}
