let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let form = document.querySelector('form');


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmpty = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmpty = true;
            showError(input, 'Khong duoc de trong')
        } else {
            showSuccess(input);
        }
    });
    return isEmpty;
}

function checkEmailError(input) {
    const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    input.value = input.value.trim();
    if (regexEmail.test(input.value)) {
        showSuccess(input);
        return false;
    } else {
        showError(input, 'Email khong hop le');
        return true;
    }
}

function checkLength(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ki tu`);
        return true;
    }

    if (input.value.length > max) {
        showError(input, `Chi co toi da ${max} ki tu`)
        return true;
    }

    showSuccess(input);
    return false;
    
}

function checkMatchPasswordError(passwordInput, confirmPasswordInput) {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Mat khau khong khop');
        return true;
    }
    return false;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isPasswordError = checkLength(password, 8, 16);
    let isCheckMatchPasswordError = checkMatchPasswordError(password, confirmPassword);

    if (isEmptyError || isEmailError || isPasswordError || isCheckMatchPasswordError) {
        //do not thing
    } else {
        // call api
    }
})