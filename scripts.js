fetch("https://api.jikan.moe/v4/anime")
.then(response => response.json())
.then(animes => animes.data.forEach(anime => createAnimeCard(anime)))
  
const modal = document.querySelector('.modal');
const largeAnimeCard = document.querySelector('.full-img');
const animeTitle = document.querySelector('.caption')
const gallery = document.querySelector('.gallery')


// create anime card 
function createAnimeCard(anime) {
// holds all images
    const container = document.createElement('div')
    container.setAttribute('class', 'img-container')
// images
    const animeCard = document.createElement('img');
    animeCard.src = anime.images.jpg.image_url;
    animeCard.alt = anime.title;
// make images original data the large image
    animeCard.setAttribute('data-original', `${anime.images.jpg.large_image_url}`);
//add image container to root
    gallery.appendChild(container);
//add images to container
    container.appendChild(animeCard);
//change opacity of picture when hovered
    animeCard.addEventListener("mouseenter", event => {
        event.target.style = "opacity: 1"
    });
    animeCard.addEventListener("mouseleave", event => {
        event.target.style = "opacity: 0.8"
    });
// listens for a click on each card to open the larger image
    animeCard.addEventListener("click", () => {
// opens the modal
        modal.classList.add("open");
// opens the large image
        largeAnimeCard.classList.add("open");
// set large image source to the large image
        const largeImageSrc = animeCard.getAttribute("data-original");
        largeAnimeCard.src = largeImageSrc;
// set text anime title
        const altText = animeCard.alt;
        animeTitle.textContent = altText
    });
// closes modal and image when clicked on
    modal.addEventListener('click', (event) => {
        if(event.target.classList.contains("modal")) {
            modal.classList.remove("open")
            largeAnimeCard.classList.remove("open")
        };
    });
};
