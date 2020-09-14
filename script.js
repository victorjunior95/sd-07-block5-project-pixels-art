window.onload = function(){
    let linhaPixel=document.getElementsByClassName('linha-pixel');
    let corUm=document.getElementById('cor-1');
    let corDois=document.getElementById('cor-2');
    let corTres=document.getElementById('cor-3');
    let corQuatro=document.getElementById('cor-4');

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
    })

    corDois.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color selected';
        corTres.className='color';
        corQuatro.className='color';
    })

    corTres.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color';
        corTres.className='color selected';
        corQuatro.className='color';
    })

    corQuatro.addEventListener('click',function(){
        corUm.className='color';
        corDois.className='color';
        corTres.className='color';
        corQuatro.className='color  selected';
    })
}