let totalLikes = 0;

function mediaPhotographerFactory(data) {
    let {likes, title, video, image} = data;
    const picture = `assets/photographers/${image}`;
    const film = `assets/photographers/${video}`;

    function getMediaCardDOM() {
        const photographerMedia = document.createElement('article');
        photographerMedia.setAttribute('tabindex', '0')
        //Affichage des nombres de likes total et prix /jour
        let totalOfLikes = document.querySelector('.total-of-likes');
        totalLikes = totalLikes + likes
        totalOfLikes.innerHTML = totalLikes;
        //Vérifier si la media est au format image ou video
        let extentionsMovie = /(\.mp4|\.ogg)$/i;

        if(!extentionsMovie.exec(film)) {
            const img = document.createElement('img');
            img.setAttribute('class', 'media');
            img.setAttribute('src', picture);
            img.setAttribute("alt", title);
            photographerMedia.appendChild(img);
        } else {
            const movie = document.createElement('video');
            movie.setAttribute('class', 'media');
            movie.setAttribute('controls', 'controls');//L'attribut controls permet d'affciher les boutons play et pause
            movie.setAttribute('src', film);
            movie.setAttribute('type', 'video/mp4');
            movie.setAttribute('alt', title);
            photographerMedia.appendChild(movie);
        }

        //Création du bloc description media
        const mediaDescription = document.createElement('div');
        mediaDescription.setAttribute('class', 'media-description');
        photographerMedia.appendChild(mediaDescription);
        const h3 = document.createElement('h3');
        h3.textContent = title;
        mediaDescription.appendChild(h3);
        let numberLikes = document.createElement('p');
        numberLikes.innerHTML = likes;

        mediaDescription.appendChild(numberLikes);
        const heart = document.createElement('em');
        heart.setAttribute('class', 'fa-solid fa-heart');
        heart.setAttribute('aria-label', 'Click on heart like');
        mediaDescription.appendChild(heart);
        //Incrémenter le nombre de likes lorsque l'utilisateur clique sur le coeur
        heart.addEventListener('click', function() {//fonction de callback
            likes++;
            totalLikes++;
            numberLikes.innerHTML = likes;
            totalOfLikes.innerHTML = totalLikes;
        });
        return (photographerMedia);
    }
    return { getMediaCardDOM };
}

//Factory qui affiche le prix d'un photographe
function photographerPriceFactory(data) {
    const {price} = data;

    function getCardDOMPrice() {
        const priceDay = document.createElement('aside');
        const photographPrice = document.createElement('h3');
        photographPrice.textContent = price + "€" + " " + "/ " + "jour";
        const totalOfLikes = document.querySelector('.price-day');
        totalOfLikes.appendChild(priceDay);
        priceDay.appendChild(photographPrice);
        return (priceDay);
    }

    return { getCardDOMPrice };
}

//Factory qui affiche le bloc des médias triès par popularité
function photographerMediaByPopularFactory(data) {
    let {likes, title, video, image} = data;
    const picture = `assets/photographers/${image}`;
    const film = `assets/photographers/${video}`;

    function getMediaCardDOMPopular() {
        const photographerMedia = document.createElement('article');
        //Affichage des nombres de likes total et prix /jour
        let totalOfLikes = document.querySelector('.total-of-likes');
        totalLikes = totalLikes + likes
        totalOfLikes.innerHTML = totalLikes;

        //Vérifier si la media est au format image ou video
        let extentionsMovie = /(\.mp4|\.ogg)$/i;
        if(!extentionsMovie.exec(film)) {
            const img = document.createElement('img');
            img.setAttribute('src', picture);
            photographerMedia.appendChild(img);
        } else {
            const movie = document.createElement('video');
            movie.setAttribute('controls', 'controls');//L'attribut controls permet d'affciher les boutons play et pause
            movie.setAttribute('src', film);
            movie.setAttribute('type', 'video/mp4');
            photographerMedia.appendChild(movie);
        }

        //Création du bloc description media
        const mediaDescription = document.createElement('div');
        mediaDescription.setAttribute('class', 'media-description');
        photographerMedia.appendChild(mediaDescription);
        const h3 = document.createElement('h3');
        h3.textContent = title;
        mediaDescription.appendChild(h3);
        let numberLikes = document.createElement('p');
        numberLikes.innerHTML = likes;

        mediaDescription.appendChild(numberLikes);
        const heart = document.createElement('em');
        heart.setAttribute('class', 'fa-solid fa-heart');
        heart.setAttribute('aria-label', 'Click on heart like');
        mediaDescription.appendChild(heart);
        //Incrémenter le nombre de likes lorsque l'utilisateur clique sur le coeur
        heart.addEventListener('click', function() {//fonction de callback
            likes++;
            totalLikes++;
            numberLikes.innerHTML = likes;
            totalOfLikes.innerHTML = totalLikes;
        });
        return (photographerMedia);
    }
    return { getMediaCardDOMPopular };
}
