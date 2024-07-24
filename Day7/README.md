# Day7

Để có thể căn chỉnh các thành phần con nằm trong body theo justify-content: center; và align-items: center;
một cách đúng như ý muốn thì body phải có thuộc tính  height: 100vh;

```python
body {
    font-family:  "Poppins", sans-serif;
    background: #8cc84c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.wrapper {
    background: white;
    border-radius: 10px;
    width: 400px;
}
```

Để thêm 1 phần tử con dưới dạng HTML vào bên trong phần tử cha ta sử dụng hàm appendChild

```python
let content = document.querySelector('.content');
let input = document.querySelector('.content input');

var tags = ['NodeJS', 'ReactJS'];

function createTags() {
    content.innerHTML = '';
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += 
                                `<li>
                                        ${tags[i]}
                                        <i class="fa-solid fa-xmark"></i>
                                    </li>
                                `
    }
    content.appendChild(input);
}
createTags();

```

Để xóa 1 đối tượng bất kỳ trong JS ta dùng hàm splice: index (vị trí thêm phần tử), count (số lượng phần tử), item (phần tử thêm vào nếu để trống có nghĩa là xóa phần tử ở vị trí index với số lượng count)

```python
array.splice(index, count, item1, ....., itemX)
```