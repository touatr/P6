//Factory qui lance un lightbox quand l'utilisateur clique sur une média
function mediaLightboxFactory(data) {
    const {title, video, image} = data;
    const picture = `assets/photographers/${image}`;
    const film = `assets/photographers/${video}`;

    function getCardDomLightbox() {
        /*Création de la lightbox et de ses boutons en HTML
        const main = document.querySelector('main');
        const lightbox = document.createElement('section');
        lightbox.setAttribute('class', 'lightbox');
        main.appendChild(lightbox);
        const lightboxButtonClose = document.createElement('button');
        const closeIcon = document.createElement('i');
        closeIcon.setAttribute('class', 'fal fa-times');
        lightboxButtonClose.appendChild(closeIcon);
        const lightboxButtonClose = document.createElement('button');
        const closeIcon = document.createElement('i');
        closeIcon.setAttribute('class', 'fal fa-times');
        lightboxButtonClose.appendChild(closeIcon);
        lightbox.appendChild(lightboxButtonClose);
        const media = document.createElement('img');
        media.setAttribute('src', picture);
        lightbox.appendChild(media);
        return (lightbox);*/
    }
    return { getCardDomLightbox }
}