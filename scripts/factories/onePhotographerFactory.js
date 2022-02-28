//Factory qui construit la page d'un photographe en fonction de l'id envoyé dans l'url
function onePhotographerFactory(data) {
    const { id, name, city, tagline, country, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    function getPhotographerPage() {
        //Construction de l'élément photograph-header
        const description = document.createElement('article');
        const photographHeader = document.createElement('div');
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
        // const button = document.querySelector('.contact_button');
        // photographHeader.appendChild(button);
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        photographHeader.appendChild(img);
        return (description);
    }

    return { getPhotographerPage };
}