let selectedColor = document.querySelector(".selected");

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', event => {
        let previusColor = document.querySelector(".selected");
        previusColor.classList.remove("selected");
        item.classList.add("selected");
    })
  })

  document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('click', event => {
        let elementSelected = document.querySelector(".selected");
        let elementWithCssProp = window.getComputedStyle(elementSelected,null).getPropertyValue("background-color");
        item.style.backgroundColor = elementWithCssProp;
    })
  })