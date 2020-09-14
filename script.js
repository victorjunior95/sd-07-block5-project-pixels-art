window.onload = function(){
    let linhaPixel=document.getElementsByClassName('linha-pixel');
    let corUm=document.getElementById('cor-1');
    let corDois=document.getElementById('cor-2');
    let corTres=document.getElementById('cor-3');
    let corQuatro=document.getElementById('cor-4');
    let corSelecionada='rgb(0,0,0)';
    let botãoLimpar=document.getElementById('clear-board');

    for (i=0; i<linhaPixel.length; i+=1){
        for (j=1; j<=5; j+=1){
            let criaDiv=document.createElement('div');
            criaDiv.className='pixel';
            criaDiv.innerText=`${i}+${j}`;
            linhaPixel[i].appendChild(criaDiv);
        }
    }

    corUm.addEventListener('click',function(){
        corUm.className='color selected';
        corDois.className='color';
        corTres.className='color';
        corQuatro.className='color';
        let propriedadeCSS=window.getComputedStyle(corUm,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    corDois.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color selected';
        corTres.className='color';
        corQuatro.className='color';
        let propriedadeCSS=window.getComputedStyle(corDois,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    corTres.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color';
        corTres.className='color selected';
        corQuatro.className='color';
        let propriedadeCSS=window.getComputedStyle(corTres,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    corQuatro.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color';
        corTres.className='color';
        corQuatro.className='color  selected';
        let propriedadeCSS=window.getComputedStyle(corQuatro,null).getPropertyValue("background-color");
        corSelecionada=propriedadeCSS;
    })

    document.querySelectorAll('.pixel').forEach(item => {
        item.addEventListener('click', event => {
          item.style.backgroundColor=corSelecionada;
        })
      })

    botãoLimpar.addEventListener('click', function(){
        let selectDiv=document.querySelectorAll('.pixel');
        for (i=0; i<selectDiv.length; i+=1){
            selectDiv[i].style.backgroundColor='rgb(255,255,255';
        }
    })
}