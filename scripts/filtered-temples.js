document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const nameHeader = document.querySelector('.nameHeader');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
        nameHeader.classList.toggle('hidden');
    });
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
        width: "400px",
        height: "225px"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    // Add more temple objects here...
    {
        templeName: "Montevideo Uruguay",
        location: "Montevideo, Uruguay",
        dedicated: "2001, March, 18",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/400x250/montevideo-uruguay-temple-lds-83476-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg",
        width: "400px",
        height: "250px"
    },
    {
        templeName: "Frankfurt Germany",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28-30",
        area: 32895,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-1-2278179.jpg",
        width: "400px",
        height: "250px"
    },

];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container.home');
    const navLinks = document.querySelectorAll('.navigation a');
    const titleName = document.querySelector('.title');

    const displayTemples = (filteredTemples) => {
        container.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';
            card.innerHTML = `
                <img src="${temple.imageUrl}"  loading="lazy"  width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
                <div class="temple-info">
                    <h2>${temple.templeName}</h2>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
            container.appendChild(card);
        });
    };

    const filterTemples = (criteria) => {
        let filteredTemples = temples;
        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                titleName.innerHTML = 'Old Temples';
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                titleName.innerHTML = 'New Temples';
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                titleName.innerHTML = 'Large Temples';
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                titleName.innerHTML = 'Small Temples';
                break;
            default:
                filteredTemples = temples;
                titleName.innerHTML = 'All Temples';
                break;
        }
        displayTemples(filteredTemples);
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(nav => nav.classList.remove('active'));
            e.target.classList.add('active');
            filterTemples(e.target.id);
        });
    });

    filterTemples('home-nav');
});


document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    copyrightYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last update: ${lastModified}`;
});