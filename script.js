document.onload
{
    let collorPallet = document.getElementsByClassName("color")
    collorPallet[0].style.backgroundColor = "rgb(0, 0, 0)"
    for (let count = 1; count < collorPallet.length ; count +=1 ){
        collorPallet[count].style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);     
    }
    collorPallet[0].className = 'Selected';
}






