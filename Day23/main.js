let result = document.querySelector('#result');
let mirror = document.querySelector('#mirror');
let imgList = document.querySelectorAll('.zoom img');
let scope = 4;

imgList.forEach(img => {
    img.addEventListener('mousemove', function (e) {
        mirror.classList.remove('hide');
        mirror.style.top = `${e.pageY}px`;
        mirror.style.left = `${e.pageX}px`;
        mirror.style.backgroundSize = `${this.offsetWidth * scope}px ${this.offsetHeight * scope}px`;

        let percentWidthOnImg = (e.clientX - this.offsetLeft) / this.offsetWidth * 100;
        let percentHeightImg = (e.clientY - this.offsetTop) / this.offsetHeight * 100;
        mirror.style.backgroundPosition = `${percentWidthOnImg}% ${percentHeightImg}%`;

        let imgSource = e.target.getAttribute('src');        
        mirror.style.backgroundImage = `url(${imgSource})`;
    });

    img.addEventListener('mouseleave', function(e) {
        mirror.classList.add('hide');
    })
})

















// document.addEventListener('mousemove', function(e) {
//     result.style.top = `${e.clientY}px`;
//     result.style.left = `${e.clientX}px`;
// })

// let img = document.querySelector('img');

// img.addEventListener('mousemove', function(e) {
//     let w = this.offsetWidth;
//     let h = this.offsetHeight;

//     let mouseWithImageBorder = e.pageX - this.offsetLeft;
//     let mouseHeightImageBorder =  e.pageY - this.offsetTop;

//     let percentMouseByW = Math.round(mouseWithImageBorder / w * 100);
//     let percentMouseByH = Math.round(mouseHeightImageBorder / h * 100);

//     mirror.style.backgroundPosition = `${percentMouseByW}% ${percentMouseByH}%`;
// })