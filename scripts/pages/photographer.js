<<<<<<< HEAD
//Récupérer les données Json des photographes
async function getPhotographers() {
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
}



    return { getUserCardDOM }//retourner un objet
}
