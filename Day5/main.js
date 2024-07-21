var btnSearch = document.querySelector(".search-box__button");

btnSearch.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
})