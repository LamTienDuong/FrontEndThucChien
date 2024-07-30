let search = document.querySelector('.search');
let city = document.querySelector('.city');
let country = document.querySelector('.country');
let value = document.querySelector('.value');
let shortDesc = document.querySelector('.short-desc');
let visibility = document.querySelector('.visibility span');
let wind = document.querySelector('.wind span');
let sun = document.querySelector('.sun span');
let time = document.querySelector('.time');
let content = document.querySelector('.content');

async function changeWeatherUI() {
    let capitalSearch = search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=d9be1506d0854dd0ec4cd8bb69fa5f8a`;
    let data = await fetch(apiURL).then(res => res.json());

    if (data.cod == 200) {
        // console.log(data);
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        value.innerText = Math.round(data.main.temp - 273.15);
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
        time.innerText = new Date().toLocaleString('vi');

        if (value.textContent > 30) {
            document.querySelector('body').style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(/img/Thu.jpg)";
            document.querySelector('body').style.backgroundPosition = 'center';
            document.querySelector('body').style.backgroundRepeat = 'no-repeat';
            document.querySelector('body').style.backgroundSize = 'cover';

            document.querySelector('#weather').style.background = 'url(/img/Thu.jpg)';
            document.querySelector('#weather').style.backgroundPosition = 'center';
            document.querySelector('#weather').style.backgroundRepeat = 'no-repeat';
            document.querySelector('#weather').style.backgroundSize = 'cover';

        } else if (value.textContent < 20) {
            document.querySelector('body').style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(/img/ice.jpg)";
            document.querySelector('body').style.backgroundPosition = 'center';
            document.querySelector('body').style.backgroundRepeat = 'no-repeat';
            document.querySelector('body').style.backgroundSize = 'cover';

            document.querySelector('#weather').style.background = 'url(/img/ice.jpg)';
            document.querySelector('#weather').style.backgroundPosition = 'center';
            document.querySelector('#weather').style.backgroundRepeat = 'no-repeat';
            document.querySelector('#weather').style.backgroundSize = 'cover';
        } else {
            document.querySelector('body').style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(/img/spring.jpg)";
            document.querySelector('body').style.backgroundPosition = 'center';
            document.querySelector('body').style.backgroundRepeat = 'no-repeat';
            document.querySelector('body').style.backgroundSize = 'cover';

            document.querySelector('#weather').style.background = 'url(/img/spring.jpg)';
            document.querySelector('#weather').style.backgroundPosition = 'center';
            document.querySelector('#weather').style.backgroundRepeat = 'no-repeat';
            document.querySelector('#weather').style.backgroundSize = 'cover';
        }
    } else {
        content.classList.add('hide');
    }
}

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        changeWeatherUI();
    }
})

