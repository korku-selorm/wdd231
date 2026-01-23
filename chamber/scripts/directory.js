// Display current year and last modified date
document.getElementById('copyright-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Fetch members and display
async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    
    const container = document.getElementById('members-container');
    
    // Function to build card HTML
    function createCard(member) {
      const levelBadge = member.membershipLevel === 3 ? 'Gold' : member.membershipLevel === 2 ? 'Silver' : 'Member';
      return `
        <div class="card">
          <img src="images/${member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.url}" target="_blank">Visit Website</a>
          <p>${member.description}</p>
          <span class="level-badge">${levelBadge}</span>
        </div>
      `;
    }
    
    // Display all members
    container.innerHTML = members.map(createCard).join('');
    
    // Toggle views
    const gridBtn = document.getElementById('grid-btn');
    const listBtn = document.getElementById('list-btn');
    
    gridBtn.addEventListener('click', () => {
      container.classList.remove('list-view');
      container.classList.add('grid-view');
      gridBtn.classList.add('active');
      listBtn.classList.remove('active');
    });
    
    listBtn.addEventListener('click', () => {
      container.classList.remove('grid-view');
      container.classList.add('list-view');
      listBtn.classList.add('active');
      gridBtn.classList.remove('active');
    });
    
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

loadMembers();

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});
