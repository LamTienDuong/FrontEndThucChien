let upload = document.querySelector('#mypicture');
let preview = document.querySelector('.preview');
let error = document.querySelector('.error');

upload.addEventListener('change', function(e) {
    let file = upload.files[0];

    if (!file) {
        return;
    }

    if (!file.name.endsWith('.jpg')) {
        error.innerText = 'Hinh anh phai la jpg';
        return;
    } else {
        error.innerText = '';
    }

    if (file.size / (1024 * 1024) > 5) {
        error.innerText = 'Hinh anh phai phai duoi 5MB';
    } else {
        error.innerText = '';
    }
    
    let fileReader = new FileReader();
    let img = document.createElement('img');

    fileReader.readAsDataURL(file);
    fileReader.onloadend = function(e) {
        console.log(e.target.result);
        img.src = e.target.result;
    }

    // img.src = URL.createObjectURL(file);
    preview.appendChild(img);
})