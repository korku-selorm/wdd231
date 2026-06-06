// menu toggle
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = 'Last Modified: ' + document.lastModified;

// read URL parameters and display them
const params = new URLSearchParams(window.location.search);

document.getElementById('show-firstname').textContent = params.get('firstname');
document.getElementById('show-lastname').textContent = params.get('lastname');
document.getElementById('show-email').textContent = params.get('email');
document.getElementById('show-phone').textContent = params.get('phone');
document.getElementById('show-organization').textContent = params.get('organization');
document.getElementById('show-timestamp').textContent = params.get('timestamp');