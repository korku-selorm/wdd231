import { places } from '../data/discover.mjs';

// menu toggle
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = 'Last Modified: ' + document.lastModified;

// localStorage visit message
const visitMsg = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    visitMsg.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const diff = now - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days < 1) {
        visitMsg.textContent = 'Back so soon! Awesome!';
    } else if (days === 1) {
        visitMsg.textContent = 'You last visited 1 day ago.';
    } else {
        visitMsg.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);

// build cards
const grid = document.getElementById('discover-grid');

places.forEach((place, index) => {
    const card = document.createElement('div');
    card.className = 'discover-card';
    card.style.gridArea = `place${index + 1}`;
    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="images/${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;
    grid.appendChild(card);
});