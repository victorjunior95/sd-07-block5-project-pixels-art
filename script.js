const preto = document.getElementById("preto");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");

// Definindo a cor selecionada a partir do preto
let corSelecionada = preto;
preto.addEventListener("click", function () {
  corSelecionada.classList.remove("selected");
  corSelecionada = preto;
  preto.classList.add("selected");
});

color2.addEventListener("click", function () {
  corSelecionada.classList.remove("selected");
  corSelecionada = color2;
  color2.classList.add("selected");
});

color3.addEventListener("click", function () {
  corSelecionada.classList.remove("selected");
  corSelecionada = color3;
  color3.classList.add("selected");
});

color4.addEventListener("click", function () {
  corSelecionada.classList.remove("selected");
  corSelecionada = color4;
  color4.classList.add("selected");
});

let selecionado = corSelecionada.style.backgroundColor;
document.addEventListener("click", function(event){
    if (event.target.classList.contains("pixel")){
        event.target.style.color = selecionado;
    }
});

