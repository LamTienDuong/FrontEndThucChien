## Day11

Có thể sử dụng innerHTML để gán phần tử HTML vào trong element hoặc lấy ra phần tử HTML của element đó

```python
toast.innerHTML = `
                    
                        <i class="fa-solid fa-check"></i>
                        <span class="message">This is a ${status} message</span>
                        <span class="countdown"></span>
                        `
```
Xóa phần tử HTML dùng remove()

```python
toast.remove();
```

Thêm phần thử con

```python
toastList.appendChild(toast);
```