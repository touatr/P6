let photographersData;

//tableau photographers contient les données des photographes
async function getPhotographerData() {

    //récupérer l'id dans l'url

    const id = 82;

    // récupérer les données de tous les photographes

    // filtrer les données reçues pour ne garder que celles avec l'id du photographe souhaité
    photographersData.photographer = photographersData.photographers.filter((photographer) => photographer.id == id)[0];

    photographersData.media = ????????;

    return photographersData;

    //Construction de l'élement photograph-header <<== a mettre dans la factory
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
    const picture = document.createElement('img');
    picture.setAttribute("src", "assets/photographers/MimiKeel.jpg");
    photographHeader.appendChild(picture);
}

function init(){
    const { photographer, media } = await getPhotographerData();
}


//Création de la partie Trier par <<== a mettre dans la factory
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

init();