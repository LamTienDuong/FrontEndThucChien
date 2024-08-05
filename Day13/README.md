## Day13

Sử dụng hidden để ẩn đi thẻ input. Đồng thời dùng label để có thể click vào thẻ input khi nó ẩn đi.\
Thêm multiple mới có thể cho phép tải lên nhiều ảnh cùng lúc. 
```python
<label for="mypicture" class="preview">
    <i class="fas fa-cloud-upload-alt"></i>
    <span>Upload image preview</span>
</label>
<input type="file" hidden id="mypicture" multiple>
```


Lấy ra giá trị của file tải lên với (upload) là thể input.

```pyhton
let file = upload.files[0];
```


endsWith được dùng để so sánh chuỗi có kết thúc bằng kí tự như mong đợi

```python
file.name.endsWith('.jpg')
```

Lấy ra kích thước của file tải lên ( đơn vị byte )

```python
let kichThuoc = file.size;
```

Các bước để tải file bằng Base64.\
B1: Khởi tạo fileReadr.\
B2: Đọc file bằng readAsDataURL.\
B3: Dùng onloadend để bắt sự kiên file đã tải xong.
```python
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onloadend = function(e) {
        console.log(e.target.result);
        img.src = e.target.result;
    }

```
