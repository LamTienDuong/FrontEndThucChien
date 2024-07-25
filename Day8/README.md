# Day8

Khi muốn tác động vào 1 phần tử A mà làm thay đổi thuộc tính của phần tử B có cùng cha thì sử dụng 
"focus ~ phần tử cần thay đổi css"

```python
<div class="container">
        <h1>Login form</h1>
        <div class="form-control">
            <input type="text" placeholder="Username">
            <small>Error</small>
            <span></span>
        </div>
    </div>
```

```python
.form-control span{
    position: absolute;
    border-bottom: 3px solid var(--success-color);
    left: 0;
    top: 38px;
    width: 0;
    transition: 0.3s;
}

.form-control input:focus ~ span{
    width: 100%;
}
```

Ở đây ta thay đổi thuộc tính của thẻ span từ width: 0 -> 100% trong vòng 0.3s

Sử dụng e.preventDefault(); để ngăn không cho load trang khi submit form

```python
form.addEventListener('submit', function(e) {
    e.preventDefault();
});
```