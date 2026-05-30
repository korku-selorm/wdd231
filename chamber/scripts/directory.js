document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('lastmod').textContent = `Last Updated: ${document.lastModified}`;

/* the nav dyna */
const menuBtn = document.getElementById('menu-btn');
const mainNav = document.getElementById('main-nav');

menuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

async function loadMembers(){
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members);
    }
    catch(error){
        console.error('Error loading members', error)
    }
}

function displayMembers(members){
    const container =  document.getElementById('directory-container');
    container.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
             <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="level">${getMembershipLevel(member.membership)}</p>
        `;
        container.appendChild(card);
    });

}

function getMembershipLevel(level) {
    if (level === 1) return 'Member';
    if (level === 2) return 'Silver';
    if (level === 3) return 'Gold';
}

document.getElementById('grid-btn').addEventListener('click', () => {
    document.getElementById('directory-container').className = 'grid-view';
});

document.getElementById('list-btn').addEventListener('click', () => {
    document.getElementById('directory-container').className = 'list-view';
});

loadMembers();