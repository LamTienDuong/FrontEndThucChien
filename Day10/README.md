## DAY10

Để làm cho 1 đoạn văn bản không cần xuống dòng ta có thể sử dụng white-space: nowrap. Kết hợp với text-overflow: ellipsis thể thể hiện dấu (...)

```python
.todos li span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

