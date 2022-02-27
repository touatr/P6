//Récupérer les données Json des photographes
/*async function getPhotographers() {
	let photographers = await fetch("../../data/photographers.json");
	photographers = await photographers.json();
	return photographers;
}

async function displayData(photographer) {
    const photographHeader = document.getElementById('photograph-header');
    const photographerModel = photographerPageFactory(photographer);
    const photographerPage = photographerModel.getPhotographerPage();
    photographHeader.appendChild(photographerPage);
};

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographers();
    displayData(photographer);
};

init();

function getPhotographerPage() {
    //Construction de l'élément photograph-header
    const description = document.createElement('article');
    photographHeader.appendChild(description);
    const h2 = document.createElement('h2');
    h2.textContent = name;
    description.appendChild(h2);
    const h3 = document.createElement('h3');
    h3.textContent = city +  ", " + country;
    description.appendChild(h3);
    const p = document.createElement('p');
    p.textContent = tagline;
    description.appendChild(p);
    const button = document.querySelector('.contact_button');
    photographHeader.appendChild(button);
    const img = document.createElement('img');
    img.setAttribute("src", picture);
    photographHeader.appendChild(img);
    return (description);
}*/

//Tableau photographers qui contient des objets
const photographers = [
    {
        "name": "Mimi Keel",
        "id": 243,
        "city": "London",
        "country": "UK",
        "tagline": "Voir le beau dans le quotidien",
        "price": 400,
        "portrait": "assets/photographers/MimiKeel.jpg"
    },
    {
        "name": "Ellie-Rose Wilkens",
        "id": 930,
        "city": "Paris",
        "country": "France",
        "tagline": "Capturer des compositions complexes",
        "price": 250,
        "portrait": "assets/photographers/EllieRoseWilkens.jpg"
    },
    {
        "name": "Tracy Galindo",
        "id": 82,
        "city": "Montreal",
        "country": "Canada",
        "tagline": "Photographe freelance",
        "price": 500,
        "portrait": "assets/photographers/TracyGalindo.jpg"
    },
    {
        "name": "Nabeel Bradford",
        "id": 527,
        "city": "Mexico City",
        "country": "Mexico",
        "tagline": "Toujours aller de l'avant",
        "price": 350,
        "portrait": "assets/photographers/NabeelBradford.jpg"
    },
    {
        "name": "Rhode Dubois",
        "id": 925,
        "city": "Barcelona",
        "country": "Spain",
        "tagline": "Je crée des souvenirs",
        "price": 275,
        "portrait": "assets/photographers/RhodeDubois.jpg"
    },
    {
        "name": "Marcel Nikolic",
        "id": 195,
        "city": "Berlin",
        "country": "Germany",
        "tagline": "Toujours à la recherche de LA photo",
        "price": 300,
        "portrait": "assets/photographers/MarcelNikolic.jpg"
    }
]

//Construction de l'élément photograph-header
const photographHeader = document.getElementById('photograph-header');
const description = document.createElement('article');
photographHeader.appendChild(description);
const h2 = document.createElement('h2');
h2.textContent = photographers[0].name;
description.appendChild(h2);
const h3 = document.createElement('h3');
h3.textContent = photographers[0].city +  ", " + photographers[0].country;
description.appendChild(h3);
const p = document.createElement('p');
p.textContent = photographers[0].tagline;
description.appendChild(p);
const button = document.querySelector('.contact_button');
photographHeader.appendChild(button);
const img = document.createElement('img');
img.setAttribute("src", photographers[0].portrait);
photographHeader.appendChild(img);

//Création de la partie Trier par
const mediaSection = document.createElement('section');
const main = document.querySelector('main');
main.appendChild(mediaSection);
const h4 = document.createElement('h4');
h4.textContent = "Trier par";
mediaSection.appendChild(h4);
const ul = document.createElement('ul');
mediaSection.appendChild(ul);
const angleUp = document.createElement('i');
angleUp.setAttribute('class', 'fa-solid fa-angle-up');
const popular = document.createElement('li');
popular.setAttribute('class', 'popular');
const popularAngleUp = document.createElement('div');
popularAngleUp.setAttribute('class', 'popular-angleUp');
ul.appendChild(popularAngleUp);
popularAngleUp.appendChild(angleUp);
popularAngleUp.appendChild(popular);
const date = document.createElement('li');
date.setAttribute('class', 'date');
const title = document.createElement('li');
title.setAttribute('class', 'title');
popular.textContent = "Popularité";
date.textContent = "Date";
title.textContent = "Titre";
ul.appendChild(date);
ul.appendChild(title);

//Cette fonction affiche le bloc Trier par
function displayOrderBy() {
    title.style.display = 'block';
    date.style.display = 'block'; 
}

angleUp.addEventListener('click', displayOrderBy);
