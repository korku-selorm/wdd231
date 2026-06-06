// menu toggle
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');
menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

// footer
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = 'Last Modified: ' + document.lastModified;

// set timestamp when form loads
document.getElementById('timestamp').value = new Date().toLocaleString();

// modal open
document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        document.getElementById(modalId).showModal();
    });
});

// modal close
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('dialog').close();
    });
});