var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

prev.addEventListener('click', () => {
    console.log(currentIndex);
    if (currentIndex == 0) {
        console.log(currentIndex);
        galleryImg.src = images[images.length].src;
        currentIndex = images.length;
    } else {
        galleryImg.src = images[currentIndex - 1].src;
        currentIndex = currentIndex - 1;
    }
})

images.forEach((item, index) => {
    item.addEventListener('click', () => {
        gallery.classList.add('show');
        galleryImg.src = images[index].src;
        currentIndex = index;
        console.log(currentIndex);
    })
})

close.addEventListener('click', () => {
    gallery.classList.remove('show');
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) {
        gallery.classList.remove('show');
    }
})