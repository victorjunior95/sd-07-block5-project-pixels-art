let x = document.querySelectorAll('.color');

for (let i = 0; i < x.length; i += 1) {
    x[i].addEventListener('click', function () {
        let a = document.querySelector('.select');
        a.classList.remove('select');
        x[i].classList.add('select');
        console.log(x[i]);
    });
}