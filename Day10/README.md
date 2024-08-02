## DAY10

Để làm cho 1 đoạn văn bản không cần xuống dòng ta có thể sử dụng white-space: nowrap. Kết hợp với text-overflow: ellipsis thể thể hiện dấu (...)

```python
.todos li span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

Thêm class vào một element nếu nó chưa có bất kỳ class nào

```python
if (todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }
```

Xóa phần tử cha của element hiện tại

```python
li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove();
        saveTodosList();
});
```

Lấy ra đoạn text đặt trong thẻ. VD: <span>Hello</span>

```python
let text = item.querySelector('span').innerText;
```

Lấy class của element

```pyhon
let status = item.getAttribute('class');
```

Lưu đối tượng vào localStorage dưới dạng danh sách chuỗi

```python
localStorage.setItem('todoList', JSON.stringify(todoStorage));
```

Lấy ra đối tượng trong localStorage 

```python
let data = JSON.parse(localStorage.getItem('todoList'));
```