
    let color = document.querySelectorAll('.color');
    let selected = document.querySelectorAll('.pixel');


    changingColor();

    function changingColor() {
        for (let index = 0; index < color.length; index += 1) {
            color[index].addEventListener("click", function () {
                let holdIt = color[0].getAttribute(this.id);
                console.log(holdIt);
            });
        }
    }

