let p = document.querySelector('p');
let originContent = p.innerHTML;

let index = 0;
let isForward = true;
setInterval(function () {
    if (isForward) {
        index++;
        if (index > originContent.length) {
            isForward = false
        }
    } else {
        index --;
        if (!index) {
            isForward = true;
        }
    }
    p.innerHTML = originContent.substring(0, index);
}, 100);
