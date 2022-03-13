//Déclaration des variables globales
const angleUp = document.querySelector('.fa-angle-up');
const angleDown = document.querySelector('.fa-chevron-down');
const date = document.querySelector('.date');
const title = document.querySelector('.title');
const popular = document.querySelector('.popular');
const popularChoice = document.querySelectorAll('li');
const photographerMedia = document.querySelectorAll('.photographer-media');

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
        photographerMedia[0].appendChild(mediaCardDOM);
    });
};

//Afficher les médias d'un photographe triès par popularité
function displayPhotographerMediaByPopular(media) {
    //Parcourir tout le tableau media pour afficher toutes les données de l'objet media
    media.forEach((media) => {

        const mediaModel = photographerMediaByPopularFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOMPopular();
        photographerMedia[1].appendChild(mediaCardDOM);
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

/*Trier le tableau media par ordre décroissant en fonction du nombre de likes 
ou de date ou de titre*/
// *function mediaOrder() {

    //photographMedia[1].style.display = 'block';

    /*for(let i = 0; i < popularChoice.length; i++) {
        if(popularChoice[i] === popular) {
            media.sort(function (a, b) {
            return b.likes - a.likes;
            });
            return true;
        }
        else if(popularChoice[i] === date) {
            media.sort(function (a, b) {
                return b.date - a.date;
            });
            return true;
        }
        else if(popularChoice[i] === title) {
            media.sort(function (a, b) {
                return b.title - a.title;
            });
            return true;
        }
    }
    return media;
}*/

//Ecouter les évenements quand on clique sur l'info-bar pour afficher ou masquer les éléments
angleDown.addEventListener('click', displayOrderBy);
angleUp.addEventListener('click', hiddenOrderBy);

//Fonction principale qui lance toutes les fonctions 
async function init() {
    //Récupère les data des photographes
    const photographerData = await getPhotographerData();
    console.log(photographerData);
    const photographer = photographerData[0];
    let photographerMedia = photographerData[1];
    displayPhotographerData(photographer);
    //Affiche le prix d'un photographe
    displayPhotographerPrice(photographer);
    //Affiche les photos d'un photographe par défaut
    displayPhotographerMedia(photographerMedia);

    //Trier les médias en fonctions de la popularité
    popular.addEventListener('click', function() {
        photographerMedia.sort(function (a, b) {
        return b.likes - a.likes;
        });
        const photographMedia = document.querySelectorAll('.photographer-media');
        console.log(photographMedia);
        photographMedia[0].style.display = 'none';
        displayPhotographerMediaByPopular(photographerMedia);
        //photographMedia[1].style.display = 'block';
    });

     //Trier les médias en fonction de la date
     popular.addEventListener('click', function() {
        photographerMedia.sort(function (a, b) {
        return b.date - a.date;
        });
        const photographMedia = document.querySelectorAll('.photographer-media');
        photographMedia[1].style.display = 'none';
        displayPhotographerMediaByPopular(photographerMedia);
        //photographMedia[1].style.display = 'block';
    });
}

init();