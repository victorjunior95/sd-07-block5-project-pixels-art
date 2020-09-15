window.onload = function () {
  document.getElementById("clear-board").addEventListener("click",function () {
    const elements = document.getElementsByClassName("pixel");
    for (let key = 0; key < elements.length; key += 1) {
      elements[key].style.backgroundColor = "rgb(255, 255, 255)";
    }
  });
}
