let btnSuccess = document.querySelector('.control success');
let btnWarning = document.querySelector('.control warning');
let btnError = document.querySelector('.control error');

function createToast(status) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    if (status == 'success') {
        toast.innerHTML = `
                    
                        <i class="fa-solid fa-check"></i>
                        <span class="message">This is a ${status} message</span>
                        <span class="countdown"></span>
                        `
    } else if (status == 'warning') {
        toast.innerHTML = `
                    
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <span class="message">This is a ${status} message</span>
                        <span class="countdown"></span>
                        `
    } else {
        toast.innerHTML = `
                    
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        <span class="message">This is a ${status} message</span>
                        <span class="countdown"></span>
                        `
    }
    
    let toastList = document.getElementById('toasts');
    toastList.appendChild(toast);

    setTimeout(function() {
        toast.style.animation = 'slide_hide 2s ease forwards';
    }, 3000)

    setTimeout(function() {
        toast.remove();
    }, 6000)
}



