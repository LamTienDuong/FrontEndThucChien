let input = document.querySelector('input');
let body = document.querySelector('body');

function init() {
    let mode = localStorage.getItem('mode') ? 'dark' : '';;
    body.setAttribute('class', mode)
}

init();

input.addEventListener('change', function(e) {
    body.classList.toggle('dark');
    let mode = body.getAttribute('class') ? 'dark' : '';
    localStorage.setItem('mode', mode);
})
