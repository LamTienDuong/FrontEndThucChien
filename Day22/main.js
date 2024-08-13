let imgList = document.querySelectorAll('img');
let container = document.querySelector('.food-container');
let btnList = document.querySelectorAll('button');
let arr = [];
let currentBtn = 0;

imgList.forEach(item => {
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
});

function activeButton(btnActive) {
    btnList.forEach(btn => {
        btn.classList.remove('active');
    });

    btnActive.classList.add('active');
}

btnList.forEach((btn, index) => {
    btn.addEventListener('click', function (e) {
        let list = arr.filter(item => btn.getAttribute('type') == 'all' || btn.getAttribute('type') == item.type ? item : '');

        activeButton(btn);

        // btnList.forEach((e, i) => {
        //     if (i == index) {
        //         btnList[i].classList.add('active');
        //     } else {
        //         btnList[i].classList.remove('active');
        //     }
        // })
        render(list);
    })
})

function render(list) {
    container.innerHTML = '';
    list.forEach(item => {
        let food = document.createElement('div');
        food.setAttribute('class', 'food');

        let imgElement = document.createElement('img');
        imgElement.src = item.src;
        imgElement.setAttribute('type', item.type);

        food.appendChild(imgElement);
        container.appendChild(food);
    })
}








// Cach 1
// let btnList = document.querySelectorAll('button');
// let imgList = document.querySelectorAll('img');

// btnList.forEach(btn => {
//     btn.addEventListener('click', e => {
//         let type = e.target.getAttribute("type");
//         imgList.forEach(img => {
//             let foodType = img.getAttribute('type');

//             if (type == 'all' || type == foodType) {
//                 img.classList.remove('hide');
//             } else {
//                 img.classList.add('hide');
//             }
//         })
//     })
// })