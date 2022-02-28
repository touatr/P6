//Récupérer les données Json des photographes
async function getPhotographers() {
	let photographers = await fetch("../../data/photographers.json");
	let photographersData = await photographers.json();

    // étape 1 : récupérer l'id en paramètre avec URLSearchParams
    // const id = ?????

    // étape 2 : filtrer les photographes pour ne récupérer que celui avec l'id qu'on a récupéré
    let photograph = photographersData.photographers.filter((photographer) => photographer.id == id );
    console.log(photograph);

	return photograph[0];
}

async function displayDataPhotograh(photographer) {
    const photographHeader = document.getElementById('photograph-header');

    const photographerModel = getPhotographerPage(photographer);
    
};

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographers();
    console.log(photographer);
    displayDataPhotograh(photographer);
};

init();