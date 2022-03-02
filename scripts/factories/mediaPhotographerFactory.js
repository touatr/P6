function mediaPhotographerFactory(data) {
    const {date, likes, photographerId, price, title, video, image} = data;

    const picture = `assets/photographers/${image}`;
    const film = `assets/photographers/${video}`;

    function getMediaCardDOM() {
        const photographerMedia = document.createElement('article');
        //Vérifier si la media est au format image ou video
        //let extentionsPicture = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        let extentionsMovie = /(\.mp4|\.ogg)$/i;

        if(!extentionsMovie.exec(film)) {
            const img = document.createElement('img');
            img.setAttribute('src', picture);
            photographerMedia.appendChild(img);
            console.log(img);
        } else {
            const movie = document.createElement('video');
            movie.setAttribute('controls', 'controls');//L'attribut controls permet d'affciher les boutons play et pause
            movie.setAttribute('src', film);
            movie.setAttribute('type', 'video/mp4');
            photographerMedia.appendChild(movie);
            console.log(movie);
        }

        const h3 = document.createElement('h3');
        h3.textContent = title;
        photographerMedia.appendChild(h3);
        return (photographerMedia);
    }
    return { getMediaCardDOM };
}