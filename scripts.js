function createAnimeCard(anime) {
        const root = document.getElementById('root')
        const container = document.createElement('div')
        container.setAttribute('class', 'row')
        const animeCard = document.createElement('img')
        animeCard.src = anime.images.jpg.image_url
        root.appendChild(container)
        root.appendChild(animeCard)
    }



//line

fetch("https://api.jikan.moe/v4/anime")
.then(response => response.json())
.then(animes => animes.data.forEach(anime => createAnimeCard(anime)))

// let animeInfo;
// fetch("https://api.jikan.moe/v4/anime")
// .then(response => response.json())
// .then(animes => animeInfo = animes)
// .then( () => animeInfo)

