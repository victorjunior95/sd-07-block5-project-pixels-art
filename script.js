function changeClass(item) {
    item.classList.remove('selected');
}

function clickConfigure(item) {
    item.addEventListener("click", function () {
        document.querySelectorAll('.color').forEach(changeClass);
        item.classList.add('selected');
        selectedColor = item;
    });
}


