let range = document.querySelector('.range');
let process = document.querySelector('.process');

function updateProcess(percent) {
    process.style.width = `${percent}%`;
    process.querySelector('span').innerText = `${percent}%`;
}

range.addEventListener('mousemove', function(e) {
    console.log(e.pageX);
    
    let processWidth = e.pageX - this.offsetLeft;
    let percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    updateProcess(percent)
})