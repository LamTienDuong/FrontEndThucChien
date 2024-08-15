let play = document.querySelector('.play');
let timer = document.querySelector('.timer');
let progress = document.querySelector('.progress');
let progressFilled = document.querySelector('.progress-filled')
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let volume = document.querySelector('.volume');
let volInput = document.querySelector('.volume input');
let volIcon = document.querySelector('.volume i');
let video = document.querySelector('video');
let volCache = 0;

console.log(volIcon);

function togglePlay() {
    if (video.paused) {
        video.play();
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
        video.pause();
        play.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
}

function updateTimer() {
    timer.innerHTML = timeToMMSS(video.currentTime);
    let percentProgress = video.currentTime / video.duration * 100;
    progressFilled.style.width = `${percentProgress}%`;
}

function timeToMMSS(sec) {
    let min = Math.floor(sec / 60);
    let second = Math.floor(sec % 60);
    return `${min}:${second}`; 
}

function skip(skipTime) {
    video.currentTime += skipTime;
}

function updateVolume () {
    if (video.volume == 0) {
        volIcon.classList.remove('fa-volume-high');
        volIcon.classList.add('fa-volume-xmark');
    } else {
        volIcon.classList.add('fa-volume-high');
        volIcon.classList.remove('fa-volume-xmark');
    }
}

play.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', function (e) {
    updateTimer();
})
prev.addEventListener('click', function() {
    skip(-5);
})
next.addEventListener('click', function() {
    skip(5);
})
volInput.addEventListener('change', function() {
    volCache = this.value;
    video.volume = this.value;    
    updateVolume();
});

volIcon.addEventListener('click', function() {
    if (video.volume > 0) {
        volCache = volInput.value;
        video.volume = 0;
        volInput.value = 0;
    } else {
        video.volume = volCache;
        volInput.value = volCache;
    }
    updateVolume();
})



