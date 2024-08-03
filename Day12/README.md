## DAY12

Vị trí của phần tử hiện tái so với bên trái màn hình (this.offsetLeft)

Vị trí trỏ chuột hiện tại so với trục X của màn hình (e.pageX)

```python
range.addEventListener('mousemove', function(e) {
    let processWidth = e.pageX - this.offsetLeft;
    let percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    updateProcess(percent)
})
```