//Déclaration des variables globales
const angleUp = document.querySelector('.fa-angle-up');
const angleDown = document.querySelector('.fa-chevron-down');
const date = document.querySelector('.date');
const title = document.querySelector('.title');
const popular = document.querySelector('.popular');
const popularChoice = document.querySelectorAll('li');
const photographerMedia = document.querySelector('.photographer-media');

//Récupérer toutes les données Json d'un photographe
async function getPhotographerData() {
	let photographers = await fetch("../../data/photographers.json");
	let photographersData = await photographers.json();

    // étape 1 : récupérer l'id en paramètre avec URLSearchParams
    //Récupérer la chaine de requête dans l'url
    const queryString = window.location.search;
    //Récupérer l'id depuis l'url
    const urlSearchParams = new URLSearchParams(queryString);
    const id = urlSearchParams.get("id");

    // étape 2 : filtrer les photographes pour ne récupérer que celui avec l'id qu'on a récupéré
    let photographer = photographersData.photographers.filter((photographer) => photographer.id == id );
    // étape 2 : filtrer les médias d'un photographe grâce à son id
    let media = photographersData.media.filter((pictures) => pictures.photographerId == id );

    //Déclarer un tableau contenant deux valeurs
    let photographerData = [photographer, media];
    return photographerData;
}


//Afficher les données du photographe sélectionné
function displayPhotographerData(photographer) {
    const photographerData = photographer[0]; 
    const photographHeader = document.getElementById('photograph-header');

    const photographerModel = onePhotographerFactory(photographerData);
    const userCardDOM = photographerModel.getPhotographerPage();
    photographHeader.appendChild(userCardDOM);
};

//Afficher le prix d'un photographe
function displayPhotographerPrice(photographer) {
    const photographerPrice = photographer[0];
    const priceDay = document.querySelector('.price-day');

    const photographerModel = photographerPriceFactory(photographerPrice);
    const cardDOMPrice = photographerModel.getCardDOMPrice();
    priceDay.appendChild(cardDOMPrice);
};

//Afficher les médias du photographe sélectionné
function displayPhotographerMedia(media) {
    
    //Parcourir tout le tableau media pour afficher toutes les données de l'objet media
    media.forEach((media) => {

        const mediaModel = mediaPhotographerFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        photographerMedia.appendChild(mediaCardDOM);
    });
};

//Afficher les médias d'un photographe triès par popularité
function displayPhotographerMediaByPopular(media) {
    //Parcourir tout le tableau media pour afficher toutes les données de l'objet media
    media.forEach((media) => {

        const mediaModel = photographerMediaByPopularFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOMPopular();
        photographerMedia.appendChild(mediaCardDOM);
    });
};
 
 //Cette fonction affiche le bloc Trier par
function displayOrderBy() {
     title.style.display = 'block';
     date.style.display = 'block';
     angleDown.style.display = 'none';
     angleUp.style.display = 'block'; 
}

function hiddenOrderBy() {
    title.style.display = 'none';
    date.style.display = 'none';
    angleDown.style.display = 'block';
    angleUp.style.display = 'none';
}

//Ecouter les évenements quand on clique sur l'info-bar pour afficher ou masquer les éléments
angleDown.addEventListener('click', displayOrderBy);
angleUp.addEventListener('click', hiddenOrderBy);

//Fonction principale qui lance toutes les fonctions 
async function init() {
    //Récupère les données des photographes
    const photographerData = await getPhotographerData();
    const photographer = photographerData[0];
    //Contient les média d'un photographe
    let photographMedia = photographerData[1];
    displayPhotographerData(photographer);
    //Affiche le prix d'un photographe
    displayPhotographerPrice(photographer);
    //Affiche les photos d'un photographe par défaut
    displayPhotographerMedia(photographMedia);

    //Trier les médias en fonctions de la popularité
    popular.addEventListener('click', function() {
        totalLikes = 0;
        photographerMedia.innerHTML = '';
        //location.reload();//Recharger la page HTML
        //Fonction de callback qui trie un tableau dans l'ordre décroissant
        photographMedia.sort(function (a, b) {
            return b.likes - a.likes;
        });
        //Affiche les médias du plus populaire au moins populaire
        displayPhotographerMediaByPopular(photographMedia);
        });
        

     //Trier les médias en fonctions de la date
     date.addEventListener('click', function() {
        //Viderl'élément de ses médias
        photographerMedia.innerHTML = '';
        //Remettre le compteur des likes à zéro
        totalLikes = 0;
        //Fonction de callback qui trie un tableau de chaînes de caractères dans l'ordre croissant
        photographMedia.sort(function (a, b) {
            if (a.date < b.date)
                return -1;
            if (a.date > b.date )
                return 1;
            return 0;
        });
        displayPhotographerMediaByPopular(photographMedia);
        });

     //Trier les médias en fonctions du titre
     title.addEventListener('click', function() {
        totalLikes = 0;
        photographerMedia.innerHTML = '';
        //Fonction de callback qui trie un tableau
        photographMedia.sort(function (a, b) {
            if (a.title < b.title)
                return -1;
            if (a.title > b.title )
                return 1;
            return 0;
        });
        displayPhotographerMediaByPopular(photographMedia);
        });
    
    //Afficher une lightbox quand on clique sur une média
    const lightbox = document.querySelector('.lightbox');
    const medias = document.querySelectorAll('.media');
    console.log(medias);
    const lightboxContainer = document.querySelector('.lightbox-container');

    /*Ecouter les événements de tous les articles contenant les médias dans photographerMedia
    en parcourant un tableau*/
    medias.forEach(media => media.addEventListener('click', function() {
        const image = document.createElement('img');
        const src = media.getAttribute('src');
        console.log(src);
        image.setAttribute('src', src);
        lightboxContainer.appendChild(image);
        lightbox.style.display = 'block';
    }));
        
}

init();