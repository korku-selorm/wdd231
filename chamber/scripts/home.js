// menu toggle
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = 'Last Modified: ' + document.lastModified;

// weather
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');
const forecast = document.querySelector('#forecast');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=5.6037&lon=-0.1870&units=metric&appid=2070360479f5df0b992f16683677199f';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.6037&lon=-0.1870&units=metric&appid=2070360479f5df0b992f16683677199f';

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            currentTemp.textContent = Math.round(data.main.temp);
            weatherDesc.textContent = data.weather[0].description;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherIcon.alt = data.weather[0].description;
        }
    } catch (error) {
        console.error('Weather error:', error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            const daily = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
            forecast.innerHTML = '<h3>3 Days Forecast</h3>';
            daily.forEach(day => {
                const date = new Date(day.dt_txt);
                const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
                forecast.innerHTML += `
                    <p>${dayName}: ${Math.round(day.main.temp)}°C - ${day.weather[0].description}</p>
                `;
            });
        }
    } catch (error) {
        console.error('Forecast error:', error);
    }
}

async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const eligible = members.filter(m => m.membership === 2 || m.membership === 3);
        eligible.sort(() => Math.random() - 0.5);
        const spotlights = eligible.slice(0, 3);
        const container = document.getElementById('spotlight-container');
        container.innerHTML = '';
        spotlights.forEach(member => {
            const card = document.createElement('div');
            card.className = 'spotlight-card';
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" width="200" height="150">
                <h3>${member.name}</h3>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="level">${member.membership === 3 ? 'Gold Member' : 'Silver Member'}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Spotlight error:', error);
    }
}

getWeather();
getForecast();
getSpotlights();