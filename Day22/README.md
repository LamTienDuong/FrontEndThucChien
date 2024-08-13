## Day22

Lưu ý khi viết css về căn chỉnh hình ảnh:\
Khi hình ảnh được đặt trong thẻ div và thẻ div được xét width, height tương ứng. Ta phải thêm thuộc tính   width: 100%; height: 100%; object-fit: cover; để hỉnh ảnh được căn chỉnh 1 cách tôt nhất.\
Ở đây ví dụ này hình ảnh đặt trong div có class 'food'

```
.food {
    margin: 10px;
    height: 230px;
    width: 230px;
    border-radius: 20px;
    overflow: hidden;
}


img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s all;
}
```

Khi muốn thêm class active vào button ta chỉ cần viết thêm 1 function riêng:\
B1: Truyền tham số là 1 button được nhấn\
B2: Xóa hết các class active\
B3: Thêm class active vào tham số button

```
function activeButton(btnActive) {
    btnList.forEach(btn => {
        btn.classList.remove('active');
    });

    btnActive.classList.add('active');
}
```