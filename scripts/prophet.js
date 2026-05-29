const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let dob = document.createElement('p');
        let bplace = document.createElement('p');

        // Adding prophet name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Setting image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        bplace.textContent = `Place of Birth ${prophet.birthplace}`

        // Appending elements
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(bplace)
        card.appendChild(portrait);

        // Add card to cards container
        cards.appendChild(card);
    });
};

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProphets(data.prophets);
}

getProphetData();