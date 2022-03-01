function mediaPhotographerFactory(data) {
    const {date, likes, photographerId, price, title, video, image, name} = data;

    const picture = `assets/photographers/${image}`;
    const film = `assets/photographers/${video}`;

    function getMediaCardDOM() {
        const photographerMedia = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        photographerMedia.appendChild(img);
        const _video = document.createElement('video');
        _video.setAttribute('src', film);
        photographerMedia.appendChild(_video);
        const h3 = document.createElement('h3');
        h3.textContent = title;
        photographerMedia.appendChild(h3);
        return (photographerMedia);
    }
    return { getMediaCardDOM };
}