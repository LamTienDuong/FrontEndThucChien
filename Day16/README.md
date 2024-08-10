## Day16

Để lấy được các thuộc tính height, width, top, left, ... của element so với window.screen dùng getClientRects

```
function toggleAnimationElementInWindow(element) {    
    let rect = element.getClientRects();     
    console.log(rect);
       
    let heightScreen = window.innerHeight;

    if (!(rect[0].bottom < 0 || rect[0].top > heightScreen)) {
        element.classList.add('start');
    } else {
        element.classList.remove('start');
    }

}
```