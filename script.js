/*let corInicial = document.querySelector('.color-1');
window.onload = function (){
    corInicial.classList.add('selected');
}*/

let paleta = document.querySelectorAll('.color');
for (index = 0; index < paleta.length; index += 1){
    let corAtual = paleta[index];
    corAtual.addEventListener('click', function(){
        for (index = 0; index < paleta.length; index += 1){
            let removeClasse = paleta[index];
            removeClasse.classList.remove('selected');
        }
        corAtual.classList.add('selected');
    });
}