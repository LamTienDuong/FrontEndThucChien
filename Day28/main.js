let cardImg = document.querySelector('.card-img');
let h2 = document.querySelector('.card-info h2');
let p = document.querySelector('.card-info p');
let button = document.querySelector('.card-info button');


fetch('http://backoffice.nodemy.vn/api/products?populate=*')
.then(res=>res.json())
.then(res => {
    let data = res.data[0];
    console.log(data);
    
    cardImg.classList.remove('loading');
    h2.classList.remove('loading');
    p.classList.remove('loading');
    button.classList.remove('loading');
            
    cardImg.innerHTML = `<img src="http://backoffice.nodemy.vn${data?.attributes?.image.data[0]?.attributes?.url}" alt="">`;
    button.innerHTML = 'Read more';
    button.style.background = 'black';
    h2.innerHTML = data?.attributes?.name;
    p.innerHTML = data?.attributes?.description?.substring(0, 100)+'...'
});
