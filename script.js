let paleta = document.querySelectorAll('.color');
let corSelecionada = document.querySelector('.color-1');

for (index = 0; index < paleta.length; index += 1) {
  let corAtual = paleta[index];
    corAtual.addEventListener('click', function() {
      for (index = 0; index < paleta.length; index += 1) {
        let removeClasse = paleta[index];
          removeClasse.classList.remove('selected');
        }
        corAtual.classList.add('selected');
        corSelecionada = corAtual;
    });
}

let quadro = document.querySelectorAll('.pixel');
for (index = 0; index < quadro.length; index += 1) {
    let pixelSelecionado = quadro[index];
    pixelSelecionado.addEventListener('click', function() {
        pixelSelecionado.classList.add(corSelecionada.classList[1]);
    }) 
}

let botaoLimpar = document.getElementById('clear-board');
botaoLimpar.addEventListener('click', function() {
    for (index = 0; index < quadro.length; index += 1) {
        let limpaQuadro = quadro[index];
        limpaQuadro.className = '';
        limpaQuadro.classList.add('pixel');
    }
})