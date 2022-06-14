fetch("https://api.jikan.moe/v4/anime")
.then(response => response.json())
.then(animes => animes.data.forEach(anime => createAnimeCard(anime), console.log(animes)))
  
const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.column img');
const largeAnimeCard = document.querySelector('.large-img');
const animeTitlle = document.querySelector('.caption')


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
    animeCard.alt = anime.title;
// make images original data the large image
    animeCard.setAttribute('data-original', `${anime.images.jpg.large_image_url}`);
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
};


previews.forEach((preview) => {
    preview.addEventListener("click", () => {
    modal.classList.add("open");
    largeAnimeCard.classList.add("open");
    const largeImageSrc = preview.getAttribute("data-original");
    largeAnimeCard.src = largeImageSrc;
    const altText= preview.alt;
    caption.textContent = altText;
    })
})

modal.addEventListener('click', (event) => {
    if(event.target.classList.contains("modal")) {
        modal.classList.remove("open")
        largeAnimeCard.classList.remove("open")
    }
})
