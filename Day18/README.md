## Day18

Để kéo thả đối tượng trong html dùng draggable="true"

```
<div class="target" draggable="true"></div>
```

e.preventDefault(); có công dụng có thể thêm đồng thời nhiều sự kiện vào 1 element

```
 box.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.appendChild(target);
    })
```