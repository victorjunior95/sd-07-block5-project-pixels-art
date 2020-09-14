const bot = document.getElementById('apagar');
const cpreto = document.getElementById('cpreto');
const cvermelho = document.getElementById('cvermelho');
const cazul = document.getElementById('cazul');
const camarelo = document.getElementById('camarelo');
const coratual = "black"
const pi1 = document.getElementById('p1');
const pi2 = document.getElementById('p2');
const pi3 = document.getElementById('p3');
const pi4 = document.getElementById('p4');
const pi5 = document.getElementById('p5');
const pi6 = document.getElementById('p6');
const pi7 = document.getElementById('p7');
const pi8 = document.getElementById('p8');
const pi9 = document.getElementById('p9');
const pi10 = document.getElementById('p10');
const pi11 = document.getElementById('p11');
const pi12 = document.getElementById('p12');
const pi13 = document.getElementById('p13');
const pi14 = document.getElementById('p14');
const pi15 = document.getElementById('p15');
const pi16 = document.getElementById('p16');
const pi17 = document.getElementById('p17');
const pi18 = document.getElementById('p18');
const pi19 = document.getElementById('p19');
const pi20 = document.getElementById('p20');
const pi21 = document.getElementById('p21');
const pi22 = document.getElementById('p22');
const pi23 = document.getElementById('p23');
const pi24 = document.getElementById('p24');
const pi25 = document.getElementById('p25');
function deletar() {
  bot.addEventListener('click', function () {
    pi1.style.backgroundColor = 'white';
    pi2.style.backgroundColor = 'white';
    pi3.style.backgroundColor = 'white';
    pi4.style.backgroundColor = 'white';
    pi5.style.backgroundColor = 'white';
    pi6.style.backgroundColor = 'white';
    pi7.style.backgroundColor = 'white';
    pi8.style.backgroundColor = 'white';
    pi9.style.backgroundColor = 'white';
    pi10.style.backgroundColor = 'white';
    pi11.style.backgroundColor = 'white';
    pi12.style.backgroundColor = 'white';
    pi13.style.backgroundColor = 'white';
    pi14.style.backgroundColor = 'white';
    pi15.style.backgroundColor = 'white';
    pi16.style.backgroundColor = 'white';
    pi17.style.backgroundColor = 'white';
    pi18.style.backgroundColor = 'white';
    pi19.style.backgroundColor = 'white';
    pi20.style.backgroundColor = 'white';
    pi21.style.backgroundColor = 'white';
    pi22.style.backgroundColor = 'white';
    pi23.style.backgroundColor = 'white';
    pi24.style.backgroundColor = 'white';
    pi25.style.backgroundColor = 'white';
  })
}

function escolherCor() {
  cpreto.addEventListener('click', function () {
    cpreto.className = "color selected preto"
    cvermelho.className = "color vermelho"
    cazul.className = "color azul"
    camarelo.className = "color amarelo"
  })
  cvermelho.addEventListener('click', function () {
    cpreto.className = "color preto"
    cvermelho.className = "color selected vermelho"
    cazul.className = "color azul"
    camarelo.className = "color amarelo"
  })
  cazul.addEventListener('click', function () {
    cpreto.className = "color preto"
    cvermelho.className = "color vermelho"
    cazul.className = "color selected azul"
    camarelo.className = "color amarelo"
  })
  camarelo.addEventListener('click', function () {
    cpreto.className = "color preto"
    cvermelho.className = "color vermelho"
    cazul.className = "color azul"
    camarelo.className = "color selected amarelo"
  })
}

window.onload = function () {
  escolherCor();
  pintar();
  apagar()
};
