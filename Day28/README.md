## Day28

Để tránh tình trạng hình ảnh khi load lên quá kích thước với thẻ div chứa nó ta xử lý bằng cách thêm\
width: 100%; height: 100%; object-fit: cover; vào css của img

```
.card-img {
    width: 250px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    border-radius: 5px;
}

.card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
```