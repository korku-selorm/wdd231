const year = new Date().getFullYear();
document.getElementById('current-year').textContent = year;

const lastModified = document.lastModified;
document.getElementById('lastmod').textContent = `Last Modified: ${lastModified}`;