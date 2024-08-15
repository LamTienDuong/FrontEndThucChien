## Day25

Lưu ý khi sử dụng function không có tham số. Nếu là function không có tham số không nên để nó trong 1 function
khác nếu trong function đó không có gì cả mà nên gọi trực tiếp luôn\
VD: Ta có hàm updateVolume. Khi gọi lại hàm updateVolume bằng cách 1 nó sẽ không thể chạy được. Thay vào đó ta sẽ sử dụng cách 2.\

```
function updateVolume () {
    volCache = this.value;
    video.volume = this.value;
    if (video.volume == 0) {
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.add('fa-volume-xmark');
    } else {
        volIcon.classList.add('fa-volume-high');
        volIcon.classList.remove('fa-volume-xmark');
    }
}

Cách 1:
volInput.addEventListener('change', function() {
    updateVolume()
})

Cách 2:
volInput.addEventListener('change', updateVolume())

```