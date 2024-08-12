let color = document.querySelector('#color');
let eraser = document.querySelector('#eraser');
let increase = document.querySelector('#increase');
let size = document.querySelector('#size');
let decrease = document.querySelector('#decrease');
let save = document.querySelector('#save');
let clear = document.querySelector('#clear');
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let pos1 = {
    x: 0,
    y: 0
}

let pos2 = {
    x: 0,
    y: 0
}

let isDrawing = false;
let colorPaint = '#000';
let sizePaint = 20;

canvas.addEventListener('mousedown', function (e) {
    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true;
});

canvas.addEventListener('mousemove', function (e) {
    if (isDrawing) {
        pos2 = {
            x: e.offsetX,
            y: e.offsetY
        }
        // fill net ve
        ctx.beginPath();
        ctx.arc(pos1.x, pos1.y, sizePaint / 2, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill();

        // ve outline
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.lineWidth = sizePaint;
        ctx.strokeStyle = colorPaint;
        ctx.stroke();

        pos1 = {
            x: pos2.x,
            y: pos2.y
        }
    }

})


canvas.addEventListener('mouseup', function(e) {
    isDrawing = false;
})

color.addEventListener('change', function(e) {
    colorPaint = e.target.value;
})

eraser.addEventListener('click', function() {
    colorPaint = '#ffffff';
})

decrease.addEventListener('click', function() {
    sizePaint -= 5;
    sizePaint = sizePaint > 5 ? sizePaint : 5; 
    size.innerHTML = sizePaint;
})

increase.addEventListener('click', function() {
    sizePaint += 5;
    sizePaint = sizePaint < 30 ? sizePaint : 30; 
    size.innerHTML = sizePaint;
})

clear.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

save.addEventListener('click', function() {
    let output = canvas.toDataURL();
    save.setAttribute('href', output);   
})