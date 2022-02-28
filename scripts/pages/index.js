async function getPhotographers() {
	let photographers = await fetch("../../data/photographers.json");
	photographers = await photographers.json();
    console.log(photographers)
	return photographers;
}

function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {

        const photographerModel = photographersFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();