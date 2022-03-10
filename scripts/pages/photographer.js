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
    const photographerMedia = document.querySelector('.photographer-media');

    //Parcourir tout le tableau media pour afficher toutes les données de l'objet media
    media.forEach((media) => {

        const mediaModel = mediaPhotographerFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        photographerMedia.appendChild(mediaCardDOM);
    });
};

//Afficher les médias d'un photographe triès par popularité
function displayPhotographerMediaByPopular(photographer) {
    media = photographer[1];
    const photographerPopularMedia = document.querySelector('.photographer-media');

    //Parcourir tout le tableau media pour afficher toutes les données de l'objet media
    media.forEach((media) => {

        const mediaModel = photographerMediaByPopularFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOMPopular();
        photographerPopularMedia.appendChild(mediaCardDOM);
    });
};

//Afficher le bloc Trier par
 //Création de la partie Trier par
 const trierPar = document.querySelector('.trier-par');
 const h4 = document.createElement('h4');
 h4.textContent = "Trier par";
 trierPar.appendChild(h4);
 const ul = document.createElement('ul');
 trierPar.appendChild(ul);
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

//Fonction principale qui lance toutes les fonctions 
async function init() {
    //Récupère les data des photographes
    const photographerData = await getPhotographerData();
    console.log(photographerData);
    const photographer = photographerData[0];
    const photographerMedia = photographerData[1];
    //affiche les données d'un photographe
    displayPhotographerData(photographer);
    console.log(photographer);
    //Affiche le prix d'un photographe
    displayPhotographerPrice(photographer);
    //Affiche les photos et vidéos d'un photographe
    displayPhotographerMedia(photographerMedia);
};

init();