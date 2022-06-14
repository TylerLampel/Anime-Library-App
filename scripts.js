fetch("https://api.jikan.moe/v4/anime")
.then(response => response.json())
.then(animes => animes.data.forEach(anime => createAnimeCard(anime), console.log(animes)))
  



// create anime card 
function createAnimeCard(anime) {
// holds all elements
    const root = document.getElementById('root')
// holds all images
    const container = document.createElement('div')
    container.setAttribute('class', 'column')
// images
    const animeCard = document.createElement('img');
    animeCard.src = anime.images.jpg.image_url;
    animeCard.setAttribute('data-original', `${anime.images.jpg.large_image_url}`);
    animeCard.alt = anime.title
//add image container to root
    root.appendChild(container);
//add images to container
    container.appendChild(animeCard);
//change opacity of picture when hovered
    animeCard.addEventListener("mouseenter", event => {
        event.target.style = "opacity: 1"
    });
    animeCard.addEventListener("mouseleave", event => {
        event.target.style = "opacity: 0.8"
    });
//open pop up of image
    animeCard.addEventListener("click", () => {
        
    });
    
};
