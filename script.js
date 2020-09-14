const bot = document.getElementById('apagar');
const cpreto = document.getElementById('cpreto');
const cvermelho = document.getElementById('cvermelho');
const cazul = document.getElementById('cazul');
const camarelo = document.getElementById('camarelo');
let coratual = 'black';
const pixels = document.getElementsByClassName('pixel');
function deletar() {
  bot.addEventListener('click', function () {
    for (let i = 0; i <= pixels.length; i += 1) {
      pixels[i].style.background = 'white';
    }
  });
}

function escolherCor() {
  cpreto.addEventListener('click', function () {
    cpreto.className = 'color selected preto';
    cvermelho.className = 'color vermelho';
    cazul.className = 'color azul';
    camarelo.className = 'color amarelo';
    coratual = 'black';
  });
  cvermelho.addEventListener('click', function () {
    cpreto.className = 'color preto';
    cvermelho.className = 'color selected vermelho';
    cazul.className = 'color azul';
    camarelo.className = 'color amarelo';
    coratual = 'red';

  });
  cazul.addEventListener('click', function () {
    cpreto.className = 'color preto';
    cvermelho.className = 'color vermelho';
    cazul.className = 'color selected azul';
    camarelo.className = 'color amarelo';
    coratual = 'blue';
  });
  camarelo.addEventListener('click', function () {
    cpreto.className = 'color preto';
    cvermelho.className = 'color vermelho';
    cazul.className = 'color azul';
    camarelo.className = 'color selected amarelo';
    coratual = 'yellow';
  });
}
function pintar() {
  
}

window.onload = function () {
  escolherCor();
  pintar();
  deletar();
};
