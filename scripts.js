
// create anime card 
function createAnimeCard(anime) {
    const root = document.getElementById('root')
    const container = document.createElement('div')
    container.setAttribute('class', 'column')
    const animeCard = document.createElement('img')
    animeCard.src = anime.images.jpg.image_url
    root.appendChild(container)
    container.appendChild(animeCard)
    animeCard.addEventListener("mouseenter", event => {
        event.target.style = "opacity: 1"
    })
    animeCard.addEventListener("mouseleave", event => {
        event.target.style = "opacity: 0.8"
    })
    animeCard.addEventListener("click", expandAnimeCard(animeCard))
}

// expand animeCard
function expandAnimeCard(animeCard) {
    let expandedCard = document.getElementById("expandedCard");
    // let imgText = document.getElementById("imgtext");
    expandedCard.src= animeCard.src;
    // imgText.innerHTML = imgs.alt;
    expandedCard.parentElement.style.display = "block";
}


fetch("https://api.jikan.moe/v4/anime")
.then(response => response.json())
.then(animes => animes.data.forEach(anime => console.log(anime, createAnimeCard(anime))))
