const preto = document.getElementById("preto");

// Definindo a cor selecionada
let corSelecionada = preto;
preto.addEventListener ("click", function(){
   corSelecionada.classList.remove("selected");
   corSelecionada = preto;
   preto.classList.add("selected");
});