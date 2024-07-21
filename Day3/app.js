var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal__footer button');
var iconClose = document.querySelector('.modal__header i');

function toggleModal(e) {
    modal.classList.toggle('hide');
} 

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);

