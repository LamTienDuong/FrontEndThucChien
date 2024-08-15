let input = document.querySelector('input');
let lowercase = document.querySelector('.lowercase');
let uppercase = document.querySelector('.uppercase');
let number = document.querySelector('.number');
let symbol = document.querySelector('.symbol');
let characters = document.querySelector('.characters');
let eye = document.querySelector('.form-input i');

eye.addEventListener('click', function () {
    input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
    eye.classList.toggle('show');
})

input.addEventListener('input', function () {
    let val = this.value;
    /[a-z]/.test(val) ? lowercase.classList.add('valid') : lowercase.classList.remove('valid');
    /[A-Z]/.test(val) ? uppercase.classList.add('valid') : uppercase.classList.remove('valid');
    /[0-9]/.test(val) ? number.classList.add('valid') : number.classList.remove('valid');
    /[\W]/.test(val) ? symbol.classList.add('valid') : symbol.classList.remove('valid');
    val.length >= 8 ? characters.classList.add('valid') : characters.classList.remove('valid');
})

