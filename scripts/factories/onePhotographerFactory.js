//Factory qui construit la page d'un photographe en fonction de l'id envoyé dans l'url
function onePhotographerFactory(data) {
    const { name, city, tagline, country, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    function getPhotographerPage() {
        //Construction de l'élément photograph-header
        const description = document.createElement('article');
        const text = document.createElement('aside');
        description.appendChild(text)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        text.appendChild(h2);
        const h3 = document.createElement('h3');
        h3.textContent = city +  ", " + country;
        text.appendChild(h3);
        const p = document.createElement('p');
        p.textContent = tagline;
        text.appendChild(p);
        const button = document.querySelector('.contact_button');
        description.appendChild(button);
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        description.appendChild(img);
        return (description);
    }

    return { getPhotographerPage };
}