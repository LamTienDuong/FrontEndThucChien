
let mockData = fetch('https://fakestoreapi.com/products')
    .then(res => {
        return res.json();
    }).then(data => {
        let products = document.querySelector('.products');

        products.innerHTML = '';
        data.forEach(item => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.innerHTML = `
        <img src="${item.image}"
                    alt="">
                <div class="info">
                    <div class="name">${item.title}</div>
                    <div class="price">${item.price}</div>
                </div>
    `

            products.appendChild(newProduct);
        })
    });

let searchInput = document.querySelector('input');
searchInput.addEventListener('input', function (e) {
    let txtSearch = e.target.value.trim().toLowerCase();
    let listProductDom = document.querySelectorAll('.product');
    listProductDom.forEach(item => {
        console.log(item.innerText);
        
        if (item.innerText.includes(txtSearch)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
})
