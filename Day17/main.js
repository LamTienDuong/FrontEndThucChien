let listCounter = document.querySelectorAll('.counter h2');

function count(element, to) {
    let count = 0;
    let time = 250;
    let step = to / time;
    let counting = setInterval(function () {
        if (count < to) {
            count += step;
            element.innerText = Math.round(count);
        } else {
            count = to;
            clearInterval(counting);
        }
    }, 1);
}

listCounter.forEach(element => count(element, element.innerText));

