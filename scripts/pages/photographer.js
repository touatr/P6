//Récupérer les données Json des photographes
async function getPhotographers() {
	let photographers = await fetch("../../data/photographers.json");
	let photographersData = await photographers.json();

    // étape 1 : récupérer l'id en paramètre avec URLSearchParams
    //Récupérer la chaine de requête dans l'url
    const queryString = window.location.search;
    //Récupérer l'id depuis l'url
    const urlSearchParams = new URLSearchParams(queryString);
    const id = urlSearchParams.get("id");
    console.log(id);

    // étape 2 : filtrer les photographes pour ne récupérer que celui avec l'id qu'on a récupéré
    let photograph = photographersData.photographers.filter((photographer) => photographer.id == id );

	return photograph[0];
}

function displayDataPhotograh(photographer) {
    const photographHeader = document.getElementById('photograph-header');

    const photographerModel = onePhotographerFactory(photographer);
    const userCardDOM = photographerModel.getPhotographerPage();
    photographHeader.appendChild(userCardDOM);
};

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographers();
    console.log(photographer);
    displayDataPhotograh(photographer);
    //Récupére les photos d'un photographe
    const photographerMedia = await getPhotographerMedia();
    console.log(photographerMedia);
    displayPhotographerMedia(photographerMedia);
};


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
const angleDown = document.createElement('i');
angleUp.setAttribute('class', 'fa-solid fa-angle-up');
angleUp.style.display = 'none';
angleDown.setAttribute('class', 'fa-solid fa-chevron-down');
const popular = document.createElement('li');
popular.setAttribute('class', 'popular');
const popularAngleUp = document.createElement('div');
popularAngleUp.setAttribute('class', 'popular-angleUp');
ul.appendChild(popularAngleUp);
popularAngleUp.appendChild(angleUp);
popularAngleUp.appendChild(angleDown);
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
    angleDown.style.display = 'none';
    angleUp.style.display = 'block'; 
}

//Cette fonction masque le bloc Trier par
function hiddenOrderBy() {
    title.style.display = 'none';
    date.style.display = 'none';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none'; 
}

//Ecouter les événements click des icones angleUp et angleDown
angleDown.addEventListener('click', displayOrderBy);
angleUp.addEventListener('click', hiddenOrderBy);


//Récupérer les medias d'un photographe grâce à l'id
async function getPhotographerMedia() {
    let photographers = await fetch("../../data/photographers.json");
    let media = await photographers.json();
    console.log(media);

    // étape 1 : récupérer l'id en paramètre avec URLSearchParams
    //Récupérer la chaine de requête dans l'url
    const queryString = window.location.search;
    //Récupérer l'id depuis l'url
    const urlSearchParams = new URLSearchParams(queryString);
    const id = urlSearchParams.get("id");

     // étape 2 : filtrer les médias d'un photographe grâce à son id
     let photographMedia = media.media.filter((pictures) => pictures.photographerId == id );

     return photographMedia;
}

function displayPhotographerMedia(media) {
    const photographerMedia = document.querySelector('.photographer-media');

    //Parcourir tout le tableau media pour afficher toutes les données de l'objet media
    media.forEach((media) => {

        const mediaModel = mediaPhotographerFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        photographerMedia.appendChild(mediaCardDOM);
    });
};

init();