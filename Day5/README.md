# Day5

## Lưu ý khi sử dụng function trong JS

Trong hàm addEventListener để sử dụng từ khóa this bắt buộc function phải được ghi đầy đủ. Không được viết dưới dạng arrow function (Lúc này không thể sử dụng từ khóa this)

this.parentElement -> Lấy ra phần tử cha của phần tử hiện tại

```python
var btnSearch = document.querySelector(".search-box__button");

btnSearch.addEventListener('click', function() {
    this.parentElement.classList.toggle('open');
});

```