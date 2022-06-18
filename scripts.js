// FETCH REQUEST

fetch("https://api.jikan.moe/v4/anime")
.then(response => response.json())
.then(animes => animes.data.forEach(anime => createAnimeCard(anime)))
  
// CONSTANTS

const modal = document.querySelector('.modal');
const largeAnimeCard = document.querySelector('.full-img');
const animeTitle = document.querySelector('.caption')
const gallery = document.querySelector('.gallery')


// CREATE ANIME CARD

function createAnimeCard(anime) {

// HOLDS ALL IMAGES

    const container = document.createElement('div')
    container.setAttribute('class', 'img-container')

//  IMAGE SOURCES

    const animeCard = document.createElement('img');
    animeCard.src = anime.images.jpg.image_url;
    animeCard.alt = anime.title;

// MAKES THE DATA ORIGINAL ATTRIBUTE THE FULL IMG

    animeCard.setAttribute('data-original', `${anime.images.jpg.large_image_url}`);

//ADD IMAGE CONTAINER TO GALLERY

    gallery.appendChild(container);

//ADD IMAGES TO CONTAINER

    container.appendChild(animeCard);

//CHANGE OPACITY WHEN HOVERED OVER

    animeCard.addEventListener("mouseenter", event => {
        event.target.style = "opacity: 1"
    });
    animeCard.addEventListener("mouseleave", event => {
        event.target.style = "opacity: 0.6"
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
