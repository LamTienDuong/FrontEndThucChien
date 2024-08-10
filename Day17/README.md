## Day17

Để lặp lại một hành động trong 1 khoảng thời gian cố định ta dùng setInterval

```
let counting = setInterval(function () {
        if (count < to) {
            count += step;
            element.innerText = Math.round(count);
        } else {
            count = to;
            clearInterval(counting);
        }
    }, 1);
```

Muốn dừng hàm này lại có thể gán cho hàm setInterval là 1 biến và dùng hàm clearInterval(tên biến) để ngừng lại