//Fonction d'usine qui construit la biographie de chaque photographe
function photographersFactory(data) {
    const { id, name, city, tagline, country, price, portrait } = data;//remplacer les

    const picture = `assets/photographers/${portrait}`;


    function getUserCardDOM() {
        const article = document.createElement( 'article' );//créer un élement article
        const photographerLinkPage = document.createElement('a');
        photographerLinkPage.setAttribute("href", "photographer.html?id="+id);
        const img = document.createElement( 'img' );//Créer un élement img
        img.setAttribute("src", picture)//Affecter une image et une src
        img.setAttribute('alt', name);
        photographerLinkPage.appendChild(img);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        const p = document.createElement('p');
        p.textContent = tagline;
        const h5 = document.createElement('h5');
        h5.textContent = price + '€/jour';
        //article.appendChild(img);//Ajouter l'élement img
        article.appendChild(photographerLinkPage);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(h5);
        return (article);
    }
    return { getUserCardDOM }//retourner un objet
}
