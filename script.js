const selecionandoCor = document.getElementById('color-palette').children;
for (let index = 0; index < selecionandoCor.length; index += 1) {
  selecionandoCor[index].addEventListener('click', function () {
    document.getElementsByClassName('color selected')[0].classList.remove('selected');
    this.classList.add('selected');
  });
}
const selecionandoPixel = document.getElementsByClassName('pixel');
for (let index = 0; index < selecionandoPixel.length; index += 1) {
  selecionandoPixel[index].addEventListener('click', function () {
    this.style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('color selected')[0]).backgroundColor;
  });
};

const botaoLimpaTela = document.getElementById('clear-board');
botaoLimpaTela.addEventListener('click', function () {
  for (index = 0; index < selecionandoPixel.length; index += 1) {
    selecionandoPixel[index].style.backgroundColor = 'white';
  };
});
