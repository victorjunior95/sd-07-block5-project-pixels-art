window.onload = function(){
    let linhaPixel=document.getElementsByClassName('linha-pixel');

    for (i=0; i<linhaPixel.length; i+=1){
        for (j=1; j<=5; j+=1){
            let criaDiv=document.createElement('div');
            criaDiv.className='pixel';
            criaDiv.innerText=`${i}+${j}`;
            linhaPixel[i].appendChild(criaDiv);
        }
    }
}