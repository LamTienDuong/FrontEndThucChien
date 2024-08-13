## Day23

Để lấy được thuộc tính css của 1 element bằng JS ta sử dụng offset + 'tên thuộc tính'\
VD: Lấy độ rộng của img:

```
let img = document.querySelector('.zoom img');
console.log(img.offsetWidth);
```

Lưu ý khi sử dụng sự kiện liên quan đến con trỏ chuột:\
VD: Ta có img đang bắt sự kiện mouseover và có 1 element khác đang đè lên img thì sự kiện chuột không thể hoạt động. Lúc này ta nên dùng pointer-events: none; để thêm vào css của element không muốn bắt sự kiện

```
.zoom img {
    width: 500px;
    height: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

#mirror {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: url(img/20231020_u1rlLByafE.jpeg);
    background-size: 500px 500px;
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
}
```

Khi viết thuộc tính css trong JS thì '-' được bỏ và viết hoa chữ cái phía sau nó\
VD: background-size: 500px 500px; được viết lại trong JS như sau:
```
mirror.style.backgroundSize = '500px 500px'
```

Giải thích 1 chút về đoạn code tạo gương phóng to img\
e.pageX: Vị trí con trỏ chuột so với trục x của trang\
e.pageY: vị trí con trỏ chuột so với trục y của trang\
e.clientX: Vị trí con trỏ chuột nằm trong phần tử so với trục x của trang\
e.clientY: Vị trí con trỏ chuột nằm trong phần tử so với trục y của trang\
this.offsetWidth: lấy ra thuộc tính width của img\
this.offsetHeight: lấy ra thuộc tính height của img\
```
img.addEventListener('mousemove', function(e) {
    mirror.style.top = `${e.pageY}px`;
    mirror.style.left = `${e.pageX}px`;
    mirror.style.backgroundSize = `${this.offsetWidth * scope}px ${this.offsetHeight * scope}px`;  

    let percentWidthOnImg = (e.clientX - this.offsetLeft) / this.offsetWidth * 100;
    let percentHeightImg = (e.clientY - this.offsetTop) / this.offsetHeight * 100;
    
    mirror.style.backgroundPosition = `${percentWidthOnImg}% ${percentHeightImg}%`;

})
```

Lưu ý khi thay đổi background bằng JS. Nếu background là img bắt buộc phải sử dụng thuộc tính backgroundImage
nếu không thì không thể thay đổi hình ảnh.

```
    let imgSource = e.target.getAttribute('src');        
    mirror.style.backgroundImage = `url(${imgSource})`;
```

Sử dụng cursor: zoom-in; để thay đổi con trỏ chuột thành kính lúp

```
cursor: zoom-in;
```