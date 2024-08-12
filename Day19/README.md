## Day19

Để download 1 hình ảnh trên chrome ta thêm đường dẫn của nó vào href của thẻ a. Khi click vào thẻ, a hình ảnh sẽ đc tải xuống và phải thêm thuộc tính download vào thẻ a đó

```
<a id="save" download="download.png">
    <i class="fa-regular fa-floppy-disk"></i>
</a>
```
Thực hiện tạo img bằng hàm toDataURL

```
    let output = canvas.toDataURL();
    save.setAttribute('href', output);   
```